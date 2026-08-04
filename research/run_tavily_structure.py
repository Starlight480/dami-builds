import os, re, json, urllib.request

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

# Targeted: HOW premium web-design agency landing pages are STRUCTURED + how they look + Lagos specifics
queries = [
    "web design agency landing page structure sections that convert clients",
    "premium website design agency homepage layout best practices 2025",
    "Lagos Nigeria web design company landing page design",
    "high converting web design agency website visual design patterns",
]

def tavily(q, depth="advanced", max_results=6):
    payload = json.dumps({
        "api_key": key,
        "query": q,
        "search_depth": depth,
        "max_results": max_results,
        "include_answer": True,
        "include_raw_content": False,
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.tavily.com/search",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=40) as resp:
        return json.loads(resp.read().decode("utf-8"))

all_results = []
seen = set()
answers = {}
for q in queries:
    try:
        data = tavily(q)
        answers[q] = (data.get("answer") or "")[:600]
        for r in data.get("results", []):
            url = r.get("url", "")
            if url in seen:
                continue
            seen.add(url)
            all_results.append({
                "query": q,
                "title": r.get("title", ""),
                "url": url,
                "content": (r.get("content", "") or "")[:500],
            })
    except Exception as e:
        print(f"QUERY FAILED: {q} -> {type(e).__name__}: {e}")

out = {"queries": queries, "count": len(all_results), "answers": answers, "results": all_results}
with open(os.path.join(os.path.dirname(__file__), "tavily-structure.json"), "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print(f"TOTAL UNIQUE RESULTS: {len(all_results)}")
for q, a in answers.items():
    print(f"\n### TAVILY ANSWER [{q}]\n{a}")
print("\n" + "="*80)
for i, r in enumerate(all_results, 1):
    print(f"{i}. [{r['query']}]\n   {r['title']}\n   {r['url']}\n   {r['content'][:220]}\n")
