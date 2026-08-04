import os, re, json, urllib.request, urllib.error

# Tavily key lives in the Hermes profile .env (provider-managed). Read server-side only.
PROFILE_ENV = os.path.join(os.path.dirname(__file__), "..", "..", "..", "AppData", "Local", "hermes", "profiles", "dev", ".env")
# Resolve absolute from HOME
home = os.environ.get("HERMES_REAL_HOME", os.path.expanduser("~"))
env_path = os.path.join(home, "AppData", "Local", "hermes", "profiles", "dev", ".env")

key = None
with open(env_path, "r", encoding="utf-8") as f:
    for line in f:
        m = re.match(r"^TAVILY_API_KEY\s*=\s*['\"]?([^'\"]+)['\"]?\s*$", line.strip())
        if m:
            key = m.group(1)
            break
assert key, "TAVILY_API_KEY not found"

queries = [
    "best high-end web design agency landing pages 2025",
    "premium website design agency pricing packages structure",
    "web design agency landing page sections that convert clients",
    "Lagos Nigeria web design agency website examples",
    "B2B web design agency charging premium case study",
]

def tavily(q, depth="basic", max_results=5):
    payload = json.dumps({
        "api_key": key,
        "query": q,
        "search_depth": depth,
        "max_results": max_results,
        "include_answer": False,
        "include_raw_content": False,
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.tavily.com/search",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))

all_results = []
seen = set()
for q in queries:
    try:
        data = tavily(q)
        for r in data.get("results", []):
            url = r.get("url", "")
            if url in seen:
                continue
            seen.add(url)
            all_results.append({
                "query": q,
                "title": r.get("title", ""),
                "url": url,
                "content": (r.get("content", "") or "")[:400],
            })
    except Exception as e:
        print(f"QUERY FAILED: {q} -> {type(e).__name__}: {e}")

out = {
    "queries": queries,
    "count": len(all_results),
    "results": all_results,
}
os.makedirs(os.path.dirname(__file__), exist_ok=True)
with open(os.path.join(os.path.dirname(__file__), "tavily-results.json"), "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print(f"TOTAL UNIQUE RESULTS: {len(all_results)}")
print("="*80)
for i, r in enumerate(all_results, 1):
    print(f"{i}. [{r['query']}]")
    print(f"   {r['title']}")
    print(f"   {r['url']}")
    print(f"   {r['content'][:200]}")
    print()
