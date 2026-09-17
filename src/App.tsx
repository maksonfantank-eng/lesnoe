import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Layers,
  Sparkles,
  Menu,
  X,
  Check,
  ChevronRight,
  Terminal,
  Lock,
  Cpu,
  MoveRight,
  Star,
} from "lucide-react";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const bentoFeatures = [
  {
    title: "Lightning Fast",
    desc: "Built on edge infrastructure. Sub-50ms response times globally.",
    icon: Zap,
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    accent: "from-violet-500/10 to-transparent",
  },
  {
    title: "Enterprise Security",
    desc: "SOC 2 Type II. End-to-end encryption. Zero-knowledge architecture.",
    icon: Shield,
    span: "col-span-1 row-span-1",
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Global CDN",
    desc: "200+ edge locations. 99.99% uptime guaranteed.",
    icon: Globe,
    span: "col-span-1 row-span-1",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    title: "Real-time Analytics",
    desc: "Track every metric that matters. Custom dashboards in seconds.",
    icon: BarChart3,
    span: "col-span-1 row-span-1 md:col-span-2",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    title: "Modular Architecture",
    desc: "Compose your stack from independent modules. Ship features independently.",
    icon: Layers,
    span: "col-span-1 row-span-1",
    accent: "from-rose-500/10 to-transparent",
  },
  {
    title: "AI-Powered",
    desc: "Smart suggestions, automated workflows, and predictive scaling.",
    icon: Sparkles,
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    accent: "from-purple-500/10 to-transparent",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Add your existing tools and data sources in minutes. We support 200+ integrations out of the box.",
    icon: Terminal,
  },
  {
    num: "02",
    title: "Configure",
    desc: "Define your workflows with our visual builder. No code required, but infinitely extensible.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Deploy",
    desc: "Push to production with one click. Automatic rollbacks, canary deployments, and zero-downtime updates.",
    icon: Lock,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "For individuals and small projects.",
    features: ["5 projects", "10K requests/mo", "1 GB storage", "Community support", "Basic analytics"],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For growing teams and businesses.",
    features: [
      "Unlimited projects",
      "1M requests/mo",
      "100 GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited requests",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Dedicated account manager",
      "SSO & SAML",
      "Custom contracts",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faq = [
  {
    q: "How does the free tier work?",
    a: "The Starter plan is completely free with no time limit. You get access to all core features with usage limits. Upgrade anytime as your needs grow.",
  },
  {
    q: "Can I migrate from my current provider?",
    a: "Yes. We provide one-click migration tools for all major platforms. Most migrations complete in under 30 minutes with zero downtime.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter plans get community support. Pro plans include email support with 24-hour response. Enterprise plans get 24/7 dedicated support with a named account manager.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No contracts. All plans are month-to-month and can be cancelled anytime. Annual plans are available at a 20% discount.",
  },
  {
    q: "How does billing work for usage overages?",
    a: "We'll notify you when you approach your plan limits. Overage is billed at competitive per-unit rates with no hidden fees.",
  },
];

const testimonials = [
  {
    quote: "We migrated our entire stack in a weekend. Performance improved 4x and our infrastructure costs dropped by 60%.",
    author: "Sarah Chen",
    role: "CTO, Vercel",
  },
  {
    quote: "The developer experience is unmatched. It feels like the team built this specifically for how we work.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer, Linear",
  },
  {
    quote: "We went from idea to production in 48 hours. The speed and simplicity are genuinely game-changing.",
    author: "Aisha Patel",
    role: "Founder, Resend",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* ── NAV ───────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-base tracking-tight">Vortex</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-neutral-500 hover:text-[#111] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden md:inline-flex text-[13px] text-neutral-500 hover:text-[#111] transition-colors"
            >
              Log in
            </a>
            <a
              href="#pricing"
              className="hidden md:inline-flex text-[13px] bg-[#111] text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors duration-200"
            >
              Get started
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-black/5 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {nav.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-neutral-600 py-2 border-b border-black/5 last:border-0"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#111] text-white text-sm px-6 py-3 rounded-full text-center mt-2"
                >
                  Get started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-black/8 rounded-full px-4 py-1.5 mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] text-neutral-500 font-medium">Now in public beta — v2.0</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-6"
          >
            Build faster.
            <br />
            <span className="text-neutral-400">Ship with confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            The modern infrastructure platform for teams who demand performance, reliability, and developer experience at every layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-black/80 transition-all duration-200 hover:shadow-lg hover:shadow-black/10"
            >
              Start building
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 bg-white text-[#111] text-sm font-medium px-6 py-3 rounded-full border border-black/10 hover:border-black/20 transition-all duration-200"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="max-w-5xl mx-auto mt-20 relative z-10"
        >
          <div className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="border-b border-black/5 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-black/5 rounded-md px-3 py-1 text-[11px] text-neutral-400 font-mono">
                  app.vortex.dev/dashboard
                </div>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {[
                  { label: "Requests", value: "2.4M", change: "+12%" },
                  { label: "Latency", value: "23ms", change: "-8%" },
                  { label: "Uptime", value: "99.99%", change: "+0.01%" },
                ].map((s) => (
                  <div key={s.label} className="bg-neutral-50 rounded-xl p-3 md:p-4">
                    <p className="text-[11px] text-neutral-400 mb-1">{s.label}</p>
                    <p className="text-lg md:text-2xl font-semibold tracking-tight">{s.value}</p>
                    <p className="text-[11px] text-emerald-600 mt-0.5">{s.change}</p>
                  </div>
                ))}
              </div>
              <div className="bg-neutral-50 rounded-xl p-4 md:p-6 h-32 md:h-44 flex items-end gap-[3px]">
                {[40, 55, 35, 65, 50, 70, 45, 80, 60, 75, 55, 85, 70, 90, 65, 95, 75, 88, 80, 92, 85, 97, 90, 88].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#111]/[0.08] rounded-sm hover:bg-[#111]/20 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── LOGOS ──────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-8">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Vercel", "Linear", "Resend", "Supabase", "PlanetScale", "Railway"].map((name) => (
              <span key={name} className="text-xl md:text-2xl font-semibold text-neutral-200 tracking-tight select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO FEATURES ────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
              Everything you need.
              <br />
              <span className="text-neutral-400">Nothing you don't.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(200px,auto)]">
            {bentoFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={`${f.span} group relative rounded-2xl bg-white border border-black/5 p-6 md:p-8 hover:border-black/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2">{f.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed mt-auto">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="how" className="py-20 md:py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
              Three steps.
              <br />
              <span className="text-neutral-400">Zero complexity.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease }}
                  className="relative rounded-2xl bg-[#fafafa] border border-black/5 p-6 md:p-8 group hover:border-black/10 transition-all duration-300"
                >
                  <span className="text-[80px] md:text-[100px] font-bold text-black/[0.03] leading-none absolute top-4 right-6 select-none">
                    {s.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
              Loved by builders.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="rounded-2xl bg-white border border-black/5 p-6 md:p-8 hover:border-black/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#111] text-[#111]" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold tracking-tight">{t.author}</p>
                  <p className="text-[12px] text-neutral-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 md:py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
              Simple, transparent.
              <br />
              <span className="text-neutral-400">No surprises.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                  p.highlighted
                    ? "bg-[#111] text-white border border-transparent shadow-xl shadow-black/10 scale-[1.02]"
                    : "bg-[#fafafa] border border-black/5 hover:border-black/10"
                }`}
              >
                <p
                  className={`text-[12px] uppercase tracking-[0.15em] mb-3 ${
                    p.highlighted ? "text-neutral-400" : "text-neutral-400"
                  }`}
                >
                  {p.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  {p.period && (
                    <span className={`text-sm ${p.highlighted ? "text-neutral-400" : "text-neutral-400"}`}>
                      {p.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${p.highlighted ? "text-neutral-400" : "text-neutral-500"}`}>{p.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          p.highlighted ? "text-emerald-400" : "text-[#111]"
                        }`}
                      />
                      <span className={p.highlighted ? "text-neutral-300" : "text-neutral-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 w-full text-sm font-medium py-3 rounded-full transition-all duration-200 ${
                    p.highlighted
                      ? "bg-white text-[#111] hover:bg-neutral-100"
                      : "bg-[#111] text-white hover:bg-black/80"
                  }`}
                >
                  {p.cta}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
              Questions?
              <br />
              <span className="text-neutral-400">Answered.</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="border-b border-black/5"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-sm md:text-base font-medium pr-4 group-hover:text-neutral-600 transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      activeFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    <span className="text-neutral-400 text-lg leading-none">+</span>
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-neutral-500 leading-relaxed pb-5">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
              Ready to build
              <br />
              <span className="text-neutral-400">something great?</span>
            </h2>
            <p className="text-neutral-500 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Join thousands of teams shipping faster with Vortex. Start free, scale without limits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-black/80 transition-all duration-200 hover:shadow-lg hover:shadow-black/10"
              >
                Start building
                <MoveRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#111] transition-colors"
              >
                Talk to sales
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="py-10 md:py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-8 border-b border-black/5">
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-base tracking-tight">Vortex</span>
              </a>
              <p className="text-[13px] text-neutral-400 max-w-xs leading-relaxed">
                The modern infrastructure platform for teams who demand performance.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8">
              {[
                { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
                { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
                { title: "Resources", links: ["Community", "Help Center", "Status", "Security"] },
                { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] },
              ].map((col) => (
                <div key={col.title}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-3">{col.title}</p>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-[13px] text-neutral-500 hover:text-[#111] transition-colors">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-[12px] text-neutral-400">© 2026 Vortex. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {["Twitter", "GitHub", "Discord"].map((s) => (
                <a key={s} href="#" className="text-[12px] text-neutral-400 hover:text-[#111] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
