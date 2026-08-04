import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const site = {
  brand: "Dami Builds",
  tagline: "Premium websites for Lagos businesses",
  // COPY: user
  whatsapp: "https://wa.me/2340000000000",
  // COPY: user — replace with real number (234 + no leading 0)
  email: "ainaisrael66@gmail.com",
  instagram: "https://instagram.com/dami.builds",
  trust: [
    { value: "X", label: "Years in business" },
    // COPY: user — e.g. '5'
    { value: "Y+", label: "Websites delivered" },
    // COPY: user — e.g. '40+'
    { value: "Lagos", label: "Based & serving SMEs" }
  ],
  nav: [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ]
};
function D({ size = 40 }) {
  return /* @__PURE__ */ jsx("span", { className: "d-logo", style: { width: size, height: size, fontSize: size * 0.55 }, "aria-label": "Dami Builds", children: "D" });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "hero", id: "top", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: "Premium Websites That Bring Lagos Businesses More Customers" }),
    /* @__PURE__ */ jsx("p", { className: "sub", children: "Dami Builds designs fast, professional websites for local businesses — built to look sharp and convert visitors into paying customers." }),
    /* @__PURE__ */ jsxs("div", { className: "cta-row", children: [
      /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "#pricing", children: "See Pricing" }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-outline", href: site.whatsapp, children: "Chat on WhatsApp" })
    ] })
  ] }) });
}
function TrustBar() {
  return /* @__PURE__ */ jsx("div", { className: "trust-bar", children: /* @__PURE__ */ jsx("div", { className: "container", style: { display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }, children: site.trust.map((t) => /* @__PURE__ */ jsxs("div", { className: "stat", children: [
    /* @__PURE__ */ jsx("div", { className: "v", children: t.value }),
    /* @__PURE__ */ jsx("div", { className: "l", children: t.label })
  ] }, t.label)) }) });
}
function ValueProp() {
  return /* @__PURE__ */ jsx("section", { className: "valueprop", children: /* @__PURE__ */ jsxs("div", { className: "container section-head", children: [
    /* @__PURE__ */ jsx("h2", { children: "A website that actually brings you customers — not just an online brochure." }),
    /* @__PURE__ */ jsxs("div", { className: "points grid grid-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "card flat", children: [
        /* @__PURE__ */ jsx("h3", { children: "Built to convert" }),
        /* @__PURE__ */ jsx("p", { children: "Clear calls-to-action and layouts that turn visitors into enquiries." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card flat", children: [
        /* @__PURE__ */ jsx("h3", { children: "Fast & mobile-ready" }),
        /* @__PURE__ */ jsx("p", { children: "Most customers browse on phones. Your site loads quickly on every device." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card flat", children: [
        /* @__PURE__ */ jsx("h3", { children: "Easy to update" }),
        /* @__PURE__ */ jsx("p", { children: "You can change text and images yourself, or we handle it for you." })
      ] })
    ] })
  ] }) });
}
const services = [
  { n: "01", title: "Web Design", desc: "Clean, professional websites tailored to your business." },
  { n: "02", title: "Marketplace & Orders", desc: "Sell products or take orders online with a simple store." },
  { n: "03", title: "Maintenance & Retainer", desc: "We keep your site running and up to date." },
  { n: "04", title: "SEO & Visibility", desc: "Help local customers find you on Google." }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("h2", { children: "What We Build" }),
      /* @__PURE__ */ jsx("p", { children: "Services designed for small and growing businesses in Lagos." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-4", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "card flat svc", children: [
      /* @__PURE__ */ jsx("div", { className: "num", children: s.n }),
      /* @__PURE__ */ jsx("h3", { children: s.title }),
      /* @__PURE__ */ jsx("p", { children: s.desc })
    ] }, s.n)) })
  ] }) });
}
const cases = [
  { client: "Client Name", result: "Placeholder — paste real case study", link: "#" },
  { client: "Client Name", result: "Placeholder — paste real case study", link: "#" },
  { client: "Client Name", result: "Placeholder — paste real case study", link: "#" }
];
function CaseStudies() {
  return /* @__PURE__ */ jsx("section", { id: "work", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("h2", { children: "Our Work" }),
      /* @__PURE__ */ jsx("p", { children: "Real websites we have built for Lagos businesses." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-3", children: cases.map((c, i) => /* @__PURE__ */ jsxs("a", { className: "card case", href: c.link, style: { color: "inherit" }, children: [
      /* @__PURE__ */ jsx("div", { className: "thumb", children: "Screenshot placeholder" }),
      /* @__PURE__ */ jsx("h3", { children: c.client }),
      /* @__PURE__ */ jsx("p", { children: c.result })
    ] }, i)) })
  ] }) });
}
const quotes = [
  { q: "Placeholder testimonial — paste a real client quote.", name: "Client Name", company: "Business" },
  { q: "Placeholder testimonial — paste a real client quote.", name: "Client Name", company: "Business" },
  { q: "Placeholder testimonial — paste a real client quote.", name: "Client Name", company: "Business" }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { id: "testimonials", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "section-head", children: /* @__PURE__ */ jsx("h2", { children: "What Clients Say" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-3", children: quotes.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "card flat", children: [
      /* @__PURE__ */ jsxs("p", { style: { color: "var(--ink)" }, children: [
        "“",
        t.q,
        "”"
      ] }),
      /* @__PURE__ */ jsxs("p", { style: { margin: 0 }, children: [
        /* @__PURE__ */ jsx("strong", { children: t.name }),
        /* @__PURE__ */ jsx("br", {}),
        t.company
      ] })
    ] }, i)) })
  ] }) });
}
const pricing = [
  {
    name: "Basic",
    price: "₦150,000",
    summary: "A basic website.",
    // COPY: user
    features: [
      "Basic website"
      // COPY: user
    ],
    highlight: false,
    cta: "Get started"
  },
  {
    name: "Growth",
    price: "₦250,000",
    summary: "Basic site + marketplace & order features.",
    // COPY: user
    features: [
      "Everything in Basic",
      "Marketplace / online ordering",
      "Limited to 3 refactoring rounds"
    ],
    highlight: true,
    cta: "Choose Growth"
  },
  {
    name: "Premium",
    price: "₦350,000",
    summary: "Everything included + 1 month free retainer.",
    // COPY: user
    features: [
      "Everything in Basic & Growth",
      "1 month free retainer",
      "Unlimited edits, refactors & updates while retained",
      "We keep your site up"
    ],
    highlight: false,
    cta: "Go Premium"
  }
];
function Pricing() {
  return /* @__PURE__ */ jsx("section", { id: "pricing", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("h2", { children: "Simple, Transparent Pricing" }),
      /* @__PURE__ */ jsx("p", { children: "Three fixed packages in Naira. No hidden fees." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-3", children: pricing.map((p) => /* @__PURE__ */ jsxs("div", { className: `card price-card${p.highlight ? " highlight" : ""}`, children: [
      /* @__PURE__ */ jsx("h3", { children: p.name }),
      /* @__PURE__ */ jsx("div", { className: "price", children: p.price }),
      /* @__PURE__ */ jsx("p", { children: p.summary }),
      /* @__PURE__ */ jsx("ul", { children: p.features.map((f) => /* @__PURE__ */ jsx("li", { children: f }, f)) }),
      /* @__PURE__ */ jsx("a", { className: `btn ${p.highlight ? "btn-primary" : "btn-outline"}`, href: "#contact", children: p.cta })
    ] }, p.name)) })
  ] }) });
}
const faqs = [
  {
    q: "What is included in the ₦150,000 Basic package?",
    a: "Placeholder — paste exact answer."
  },
  {
    q: "What does “3 refactoring rounds” mean on the Growth package?",
    a: "Placeholder — explain that structural changes are capped at 3 rounds; small text/image edits are not counted."
  },
  {
    q: "What happens after the 1-month free retainer on Premium?",
    a: "Placeholder — state the retainer extension price (set by user, e.g. ₦X/mo) for continued unlimited edits + uptime support."
  },
  {
    q: "How long does it take to build my website?",
    a: "Placeholder — paste timeline."
  }
];
function FAQ() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "faq", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "section-head", children: /* @__PURE__ */ jsx("h2", { children: "Frequently Asked Questions" }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 720, margin: "0 auto" }, children: faqs.map((f) => /* @__PURE__ */ jsxs("details", { children: [
      /* @__PURE__ */ jsx("summary", { children: f.q }),
      /* @__PURE__ */ jsx("p", { style: { marginTop: 10 }, children: f.a })
    ] }, f.q)) })
  ] }) });
}
function LeadForm() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [busy, setBusy] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setStatus({ type: "", msg: "" });
    const data = Object.fromEntries(new FormData(e.target).entries());
    {
      console.log("[LEAD] no VITE_LEAD_ENDPOINT set — payload:", data);
      setStatus({ type: "ok", msg: "Thanks! Your details were captured (demo mode — endpoint not set yet)." });
      setBusy(false);
      return;
    }
  }
  return /* @__PURE__ */ jsx("section", { id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("h2", { children: "Get a Free Quote" }),
      /* @__PURE__ */ jsx("p", { children: "Tell us about your business and we will get back to you." })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "lead-form", onSubmit, children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Name" }),
      /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true }),
      /* @__PURE__ */ jsx("label", { htmlFor: "business", children: "Business" }),
      /* @__PURE__ */ jsx("input", { id: "business", name: "business", required: true }),
      /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Phone" }),
      /* @__PURE__ */ jsx("input", { id: "phone", name: "phone" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "message", children: "What do you need?" }),
      /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", rows: 4, required: true }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary", type: "submit", disabled: busy, style: { marginTop: 18, width: "100%" }, children: busy ? "Sending…" : "Send Enquiry" }),
      status.msg && /* @__PURE__ */ jsx("p", { className: `status ${status.type}`, role: "status", children: status.msg })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "container cols", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "brand", children: [
          /* @__PURE__ */ jsx(D, { size: 32 }),
          /* @__PURE__ */ jsx("span", { children: site.brand })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { marginTop: 12, maxWidth: 280 }, children: site.tagline })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Contact" }),
        /* @__PURE__ */ jsx("p", { style: { margin: "4px 0" }, children: /* @__PURE__ */ jsx("a", { href: `mailto:${site.email}`, children: site.email }) }),
        /* @__PURE__ */ jsx("p", { style: { margin: "4px 0" }, children: /* @__PURE__ */ jsx("a", { href: site.whatsapp, children: "WhatsApp" }) }),
        /* @__PURE__ */ jsx("p", { style: { margin: "4px 0" }, children: /* @__PURE__ */ jsx("a", { href: site.instagram, children: "Instagram · @dami.builds" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Quick Links" }),
        site.nav.map((n) => /* @__PURE__ */ jsx("p", { style: { margin: "4px 0" }, children: /* @__PURE__ */ jsx("a", { href: n.href, children: n.label }) }, n.href))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container", style: { marginTop: 32, borderTop: "1px solid #1e293b", paddingTop: 20, fontSize: ".9rem" }, children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      site.brand,
      ". All rights reserved."
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("a", { className: "brand", href: "#top", children: [
        /* @__PURE__ */ jsx(D, { size: 32 }),
        /* @__PURE__ */ jsx("span", { children: site.brand })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "nav", children: site.nav.map((n) => /* @__PURE__ */ jsx("a", { href: n.href, children: n.label }, n.href)) })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(TrustBar, {}),
      /* @__PURE__ */ jsx(ValueProp, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(CaseStudies, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Pricing, {}),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(LeadForm, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const createApp = () => {
  const app = (el) => renderToString(React.createElement(App));
  return { app };
};
export {
  createApp
};
