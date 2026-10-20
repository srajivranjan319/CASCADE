import { useState, useEffect, useRef, useCallback } from "react"
import {
  Language,
  languageNames,
  languageRegions,
  dictionary,
  vocabCards,
  getWorksheetData,
  WorksheetEntry,
  PENDING,
  SourceLang,
  sourceLangConfig,
  lookupTranslation,
} from "./data/dictionary"

type Section = "home" | "translate" | "learn" | "worksheet" | "offline" | "howitworks"

type Translation = {
  id: string
  hindi: string
  output: string
  lang: Language
  timestamp: number
}

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="bhasaSetu AI logo">
      <rect width="40" height="40" rx="10" fill="#1B4332" />
      <path d="M8 26 Q20 10 32 26" stroke="#B7E4C7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="26" r="3" fill="#E9C46A" />
      <circle cx="32" cy="26" r="3" fill="#A78BDE" />
      <path d="M14 20 Q20 14 26 20" stroke="#FAFAF3" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
      <circle cx="20" cy="27" r="2" fill="#40916C" />
      <path d="M20 25 L20 27" stroke="#40916C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Hero Illustration ───────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[420px] h-[380px] mx-auto select-none">
      <svg viewBox="0 0 420 380" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B7E4C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B7E4C7" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BDE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BDE" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="110" cy="180" r="70" fill="url(#glow1)" />
        <circle cx="310" cy="180" r="70" fill="url(#glow2)" />

        <rect x="20" y="130" width="160" height="80" rx="16" fill="#1B4332" />
        <rect x="22" y="132" width="156" height="76" rx="14" fill="#2D6A4F" fillOpacity="0.3" stroke="#40916C" strokeWidth="1" />
        <text x="100" y="175" textAnchor="middle" fill="#FAFAF3" fontFamily="'Noto Sans Devanagari', serif" fontSize="28" fontWeight="600">नमस्ते</text>
        <text x="100" y="196" textAnchor="middle" fill="#B7E4C7" fontFamily="'DM Sans', sans-serif" fontSize="12">Hindi</text>
        <polygon points="155,185 180,175 155,165" fill="#1B4332" />

        <rect x="240" y="130" width="160" height="80" rx="16" fill="#5B3A8C" />
        <rect x="242" y="132" width="156" height="76" rx="14" fill="#7C5CBF" fillOpacity="0.25" stroke="#A78BDE" strokeWidth="1" />
        <text x="320" y="172" textAnchor="middle" fill="#FAFAF3" fontFamily="'DM Sans', sans-serif" fontSize="18" fontWeight="600">Johar</text>
        <text x="320" y="196" textAnchor="middle" fill="#C4B5FD" fontFamily="'DM Sans', sans-serif" fontSize="12">Santali</text>
        <polygon points="265,185 240,175 265,165" fill="#5B3A8C" />

        <path d="M185 175 Q210 140 235 175" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="210" cy="148" r="8" fill="#E9C46A" />
        <text x="210" y="152" textAnchor="middle" fill="#1B4332" fontFamily="'DM Sans', sans-serif" fontSize="9" fontWeight="700">AI</text>

        <g transform="translate(60, 50)">
          <circle cx="0" cy="0" r="22" fill="#D8F3DC" />
          <circle cx="-6" cy="-2" r="5" fill="#1B4332" />
          <circle cx="4" cy="-2" r="5" fill="#1B4332" />
          <path d="M-8 5 Q0 10 8 5" stroke="#1B4332" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="12" cy="-12" r="3" fill="#E9C46A" />
          <circle cx="-14" cy="-10" r="2" fill="#A78BDE" />
        </g>

        <g transform="translate(350, 50)">
          <circle cx="0" cy="0" r="22" fill="#EDE9FE" />
          <circle cx="-6" cy="-2" r="5" fill="#5B3A8C" />
          <circle cx="4" cy="-2" r="5" fill="#5B3A8C" />
          <path d="M-8 5 Q0 10 8 5" stroke="#5B3A8C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="-12" cy="-12" r="3" fill="#E9C46A" />
          <circle cx="14" cy="-10" r="2" fill="#40916C" />
        </g>

        <path d="M82 72 Q210 30 338 72" stroke="#B7E4C7" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeOpacity="0.7" />

        <g transform="translate(80, 270)">
          <rect x="-36" y="-14" width="72" height="28" rx="8" fill="#FAFAF3" stroke="#B7E4C7" strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fill="#1B4332" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="500">🔊 Gondi · Bhili</text>
        </g>

        <g transform="translate(340, 270)">
          <rect x="-36" y="-14" width="72" height="28" rx="8" fill="#FAFAF3" stroke="#E9C46A" strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fill="#1B4332" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="500">✦ Kui · More</text>
        </g>

        <circle cx="50" cy="310" r="4" fill="#E9C46A" fillOpacity="0.6" />
        <circle cx="370" cy="310" r="3" fill="#A78BDE" fillOpacity="0.6" />
        <circle cx="210" cy="340" r="5" fill="#40916C" fillOpacity="0.4" />
        <circle cx="130" cy="355" r="2.5" fill="#E9C46A" fillOpacity="0.5" />
        <circle cx="290" cy="350" r="2.5" fill="#A78BDE" fillOpacity="0.5" />
      </svg>
    </div>
  )
}

// ─── Status Badge ────────────────────────────────────────────────────────────

function StatusBadge({ icon, label, color }: { icon: string; label: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium shadow-sm border"
      style={{ background: "white", borderColor: "#E8EDE5", fontFamily: "var(--font-display)" }}
    >
      <span>{icon}</span>
      <span style={{ color: "#1A2415" }}>{label}</span>
      <span className="w-2 h-2 rounded-full" style={{ background: color }} />
    </div>
  )
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({
  active,
  setActive,
}: {
  active: Section
  setActive: (s: Section) => void
}) {
  const navItems: { label: string; section: Section }[] = [
    { label: "Translate", section: "translate" },
    { label: "Learn", section: "learn" },
    { label: "Worksheet", section: "worksheet" },
    { label: "Offline", section: "offline" },
    { label: "How It Works", section: "howitworks" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ background: "rgba(250,250,243,0.92)", backdropFilter: "blur(12px)", borderColor: "#E8EDE5" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        <button
          onClick={() => setActive("home")}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <Logo size={34} />
          <div className="leading-none">
            <div className="font-bold text-base" style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}>
              bhasaSetu AI
            </div>
            <div className="text-xs" style={{ color: "#6B7C64", fontFamily: "var(--font-devanagari)" }}>
              भाषा सेतु
            </div>
          </div>
        </button>

        <div
          className="flex items-center gap-0.5 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {navItems.map(item => (
            <button
              key={item.section}
              className={`nav-link ${active === item.section ? "active" : ""}`}
              onClick={() => setActive(item.section)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="btn-primary flex-shrink-0 hidden sm:block"
          style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
          onClick={() => setActive("translate")}
        >
          Open Translator
        </button>
      </div>
    </nav>
  )
}

// ─── Image constants ──────────────────────────────────────────────────────────

const IMGS = {
  classroom: "https://images.unsplash.com/photo-1692269725836-fbd72e98883f?w=1200&h=800&fit=crop&auto=format",
  boysReading: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?w=900&h=700&fit=crop&auto=format",
  motherChild: "https://images.unsplash.com/photo-1723005315946-4ba11c55de39?w=900&h=1100&fit=crop&auto=format",
  womenLoom: "https://images.unsplash.com/photo-1759738098462-90ffac98c554?w=1000&h=700&fit=crop&auto=format",
  forest: "https://images.unsplash.com/photo-1723745390402-04eeda8b6444?w=1200&h=900&fit=crop&auto=format",
  forestAerial: "https://images.unsplash.com/photo-1462037969409-249ce17b6605?w=1000&h=700&fit=crop&auto=format",
  artPainting: "https://images.unsplash.com/photo-1713986719526-8c44918a9688?w=900&h=900&fit=crop&auto=format",
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

function HomePage({ onTranslate, onLearn, onHowItWorks, onWorksheet }: {
  onTranslate: () => void
  onLearn: () => void
  onHowItWorks: () => void
  onWorksheet: () => void
}) {
  return (
    <div>
      <HeroSection onTranslate={onTranslate} onHowItWorks={onHowItWorks} />
      <StatsStrip />
      <MissionSection onLearn={onLearn} />
      <CommunityGallery />
      <FeaturesSection onTranslate={onTranslate} onWorksheet={onWorksheet} onHowItWorks={onHowItWorks} />
      <NatureQuoteSection />
      <CtaSection onTranslate={onTranslate} onLearn={onLearn} />
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ onTranslate, onHowItWorks }: { onTranslate: () => void; onHowItWorks: () => void }) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", flexDirection: "column" }}>
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src={IMGS.classroom}
          alt="Children learning in an Indian classroom"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(27,67,50,0.93) 0%, rgba(27,67,50,0.82) 45%, rgba(27,67,50,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(167,139,222,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-[1fr_420px] gap-12 items-center w-full">
        <div className="animate-slide-up">
          <div className="tag mb-6" style={{ background: "rgba(183,228,199,0.2)", color: "#B7E4C7", border: "1px solid rgba(183,228,199,0.35)" }}>
            <span className="status-dot" style={{ background: "#B7E4C7" }} />
            Offline-first Classroom AI · Demo Pack
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.02] tracking-tight mb-3"
            style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}
          >
            One voice.
          </h1>
          <h1
            className="text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.02] tracking-tight mb-7"
            style={{ color: "#E9C46A", fontFamily: "var(--font-display)" }}
          >
            Many languages.
          </h1>

          <p
            className="text-xl sm:text-2xl mb-2 font-medium"
            style={{ color: "#B7E4C7", fontFamily: "var(--font-devanagari)" }}
          >
            भाषाओं को जोड़ना। समुदायों को सशक्त करना।
          </p>
          <p className="text-base sm:text-lg mb-9 leading-relaxed max-w-[520px]" style={{ color: "rgba(250,250,243,0.75)" }}>
            An offline-first classroom assistant bridging Hindi and India's tribal languages — Santali, Gondi, Bhili, and Kui — designed for schools with limited or no connectivity.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              className="btn-primary"
              style={{ background: "#E9C46A", color: "#1B4332" }}
              onClick={onTranslate}
            >
              Open Live Translator →
            </button>
            <button
              className="btn-outline"
              style={{ borderColor: "rgba(183,228,199,0.5)", color: "#B7E4C7" }}
              onClick={onHowItWorks}
            >
              See How It Works
            </button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: "🎙️", label: "Voice Ready" },
              { icon: "📡", label: "Works Offline" },
              { icon: "🧠", label: "AI Powered" },
              { icon: "⚡", label: "1.8s Demo" },
            ].map(b => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "#FAFAF3", fontFamily: "var(--font-display)", backdropFilter: "blur(8px)" }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating info card — desktop only */}
        <div className="hidden lg:block animate-float-slow">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", borderColor: "rgba(183,228,199,0.25)" }}
          >
            <div className="p-5 border-b" style={{ borderColor: "rgba(183,228,199,0.2)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#B7E4C7", fontFamily: "var(--font-display)" }}>
                Live Translation Preview
              </p>
              <div className="space-y-3">
                {[
                  { hi: "नमस्ते", lang: "Santali", out: "Johar" },
                  { hi: "पानी", lang: "Gondi", out: "Neeru" },
                  { hi: "किताब", lang: "Bhili", out: "Chaapdi" },
                  { hi: "शिक्षक", lang: "Kui", out: "Guru" },
                ].map(row => (
                  <div key={row.hi} className="flex items-center gap-3">
                    <span style={{ fontFamily: "var(--font-devanagari)", color: "#FAFAF3", fontSize: "1.15rem", minWidth: 60 }}>{row.hi}</span>
                    <span style={{ color: "#B7E4C7", fontSize: "0.8rem" }}>→</span>
                    <span className="flex-1 font-semibold" style={{ color: "#E9C46A", fontFamily: "var(--font-display)" }}>{row.out}</span>
                    <span className="tag" style={{ background: "rgba(167,139,222,0.2)", color: "#C4B5FD", padding: "0.1rem 0.5rem", fontSize: "0.7rem" }}>
                      {row.lang}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 flex items-center gap-2">
              <span className="status-dot" style={{ background: "#40916C" }} />
              <span className="text-xs" style={{ color: "#B7E4C7", fontFamily: "var(--font-display)" }}>Demo pack · 27 phrases loaded</span>
            </div>
          </div>
        </div>
      </div>

      {/* Language strip */}
      <div className="relative border-t" style={{ borderColor: "rgba(183,228,199,0.2)", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-6 text-sm">
          {[
            { lang: "Santali (संताली)", region: "Jharkhand · W. Bengal · Odisha" },
            { lang: "Gondi (गोंडी)", region: "MP · Chhattisgarh · Maharashtra" },
            { lang: "Bhili (भीली)", region: "Rajasthan · Gujarat · MP" },
            { lang: "Kui (कुई)", region: "Odisha (Kondh regions)" },
          ].map(({ lang, region }) => (
            <div key={lang} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#40916C" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#B7E4C7" }}>{lang}</span>
              <span style={{ color: "rgba(183,228,199,0.45)" }}>·</span>
              <span style={{ color: "rgba(250,250,243,0.55)", fontSize: "0.8rem" }}>{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "4", label: "Tribal Languages", sub: "Santali · Gondi · Bhili · Kui" },
    { value: "124", label: "Classroom Phrases", sub: "Offline demo pack" },
    { value: "0", label: "Internet Required", sub: "Core features work offline" },
    { value: "100%", label: "Private by Design", sub: "No data leaves your device" },
  ]
  return (
    <div className="border-b" style={{ borderColor: "#E8EDE5", background: "#1B4332" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ borderColor: "rgba(183,228,199,0.2)" }}>
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-8">
            <p className="text-4xl font-bold mb-0.5" style={{ color: "#E9C46A", fontFamily: "var(--font-display)" }}>{s.value}</p>
            <p className="font-semibold mb-1" style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}>{s.label}</p>
            <p className="text-xs" style={{ color: "#6B9E7A" }}>{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mission Section ──────────────────────────────────────────────────────────

function MissionSection({ onLearn }: { onLearn: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
      {/* Images column */}
      <div className="relative hidden lg:block">
        <div className="grid grid-cols-2 gap-3 h-[520px]">
          <div className="rounded-2xl overflow-hidden row-span-2" style={{ background: "#D8F3DC" }}>
            <img
              src={IMGS.motherChild}
              alt="Woman in sari with child — community and connection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ background: "#EDE9FE" }}>
            <img
              src={IMGS.boysReading}
              alt="Two young boys reading together in a classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ background: "#FEF3C7" }}>
            <img
              src={IMGS.womenLoom}
              alt="Women gathered around a traditional loom — community craft"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>
        {/* Floating label */}
        <div
          className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 border shadow-lg"
          style={{ background: "white", borderColor: "#E8EDE5" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
            Languages at risk
          </p>
          <p className="font-bold" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
            600+ tribal languages in India
          </p>
        </div>
      </div>

      {/* Text column */}
      <div>
        <div className="tag mb-5" style={{ background: "#FEF3C7", color: "#92400E" }}>
          ✦ The Problem We're Solving
        </div>
        <h2
          className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-6"
          style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}
        >
          Millions of students learn in a language they don't speak at home.
        </h2>
        <p className="text-lg leading-relaxed mb-5" style={{ color: "#4A5E44" }}>
          India's tribal communities speak hundreds of indigenous languages — but most classroom instruction happens in Hindi or English. This language barrier silently excludes children from quality education.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: "#6B7C64" }}>
          bhasaSetu AI builds a bridge. By giving teachers and students a simple, offline-ready translation tool, we help classrooms become more inclusive — without requiring expensive infrastructure or continuous internet access.
        </p>

        {/* Mobile images */}
        <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden h-56">
          <div className="rounded-xl overflow-hidden" style={{ background: "#D8F3DC" }}>
            <img src={IMGS.boysReading} alt="Boys reading" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden" style={{ background: "#FEF3C7" }}>
            <img src={IMGS.motherChild} alt="Mother and child" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {[
            { icon: "🏫", text: "Works in classrooms with zero internet connectivity" },
            { icon: "🎙️", text: "Voice input and output in Hindi and tribal languages" },
            { icon: "📋", text: "Printable bilingual worksheets for teachers" },
          ].map(item => (
            <div key={item.text} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-base" style={{ background: "#D8F3DC" }}>
                {item.icon}
              </span>
              <p className="leading-relaxed pt-1" style={{ color: "#4A5E44" }}>{item.text}</p>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={onLearn}>
          Start Learning Today →
        </button>
      </div>
    </section>
  )
}

// ─── Community Gallery ────────────────────────────────────────────────────────

function CommunityGallery() {
  return (
    <section style={{ background: "#F0EFE4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
              Community & Context
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
              The communities<br />we're built for.
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#6B7C64" }}>
            From forest villages to rural classrooms, bhasaSetu AI is designed around the real contexts of India's tribal educators and students.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-12 gap-3 h-[480px] sm:h-[520px]">
          {/* Large left */}
          <div className="col-span-12 sm:col-span-7 rounded-2xl overflow-hidden relative" style={{ background: "#D8F3DC" }}>
            <img
              src={IMGS.classroom}
              alt="Group of young children sitting in a classroom"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, rgba(27,67,50,0.85) 0%, transparent 100%)" }}
            >
              <p className="font-semibold text-sm" style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}>
                Children in a rural Indian classroom
              </p>
              <p className="text-xs" style={{ color: "rgba(183,228,199,0.8)" }}>
                Many speak tribal languages at home, Hindi at school
              </p>
            </div>
          </div>

          {/* Right column — two stacked */}
          <div className="col-span-12 sm:col-span-5 grid grid-rows-2 gap-3">
            <div className="rounded-2xl overflow-hidden relative" style={{ background: "#EDE9FE" }}>
              <img
                src={IMGS.womenLoom}
                alt="Women gathered around a traditional loom"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(to top, rgba(91,58,140,0.8) 0%, transparent 100%)" }}
              >
                <p className="text-xs font-semibold" style={{ color: "#EDE9FE", fontFamily: "var(--font-display)" }}>
                  Traditional craft · Community knowledge
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ background: "#FEF3C7" }}>
              <img
                src={IMGS.motherChild}
                alt="A woman in a sari standing next to a child"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(to top, rgba(200,132,26,0.75) 0%, transparent 100%)" }}
              >
                <p className="text-xs font-semibold" style={{ color: "#FEF3C7", fontFamily: "var(--font-display)" }}>
                  Intergenerational language transmission
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-5 text-xs text-center" style={{ color: "#9AAD8F" }}>
          Photos from Indian communities · Unsplash · Used for illustrative purposes
        </p>
      </div>
    </section>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────

function FeaturesSection({
  onTranslate,
  onWorksheet,
  onHowItWorks,
}: {
  onTranslate: () => void
  onWorksheet: () => void
  onHowItWorks: () => void
}) {
  const features = [
    {
      icon: "🔄",
      title: "Live Translator",
      desc: "Type or speak Hindi and get an illustrative equivalent in Santali, Gondi, Bhili, or Kui — instantly, with voice output.",
      accent: "#1B4332",
      bg: "#D8F3DC",
      cta: "Try It",
      action: onTranslate,
    },
    {
      icon: "📚",
      title: "Vocab Learning",
      desc: "Flashcard-style daily vocabulary across categories — Family, Nature, Education. Progress saves locally between sessions.",
      accent: "#5B3A8C",
      bg: "#EDE9FE",
      cta: null,
      action: null,
    },
    {
      icon: "📋",
      title: "Worksheet Generator",
      desc: "Generate print-ready bilingual worksheets with Read Aloud, Match Words, or Fill-in-the-Blank activities for any level.",
      accent: "#C8841A",
      bg: "#FEF3C7",
      cta: "Generate One",
      action: onWorksheet,
    },
    {
      icon: "📡",
      title: "Offline by Design",
      desc: "The complete demo dictionary and learning data are embedded. No server. No internet required. Just open and teach.",
      accent: "#2D6A4F",
      bg: "#D8F3DC",
      cta: "See Dashboard",
      action: onHowItWorks,
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
          What's Inside
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
          Four tools. One purpose.
        </h2>
        <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#6B7C64" }}>
          bhasaSetu AI combines translation, learning, worksheet generation, and offline operation into a single, classroom-ready prototype.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(f => (
          <div
            key={f.title}
            className="card flex flex-col group"
            style={{ borderColor: "#E8EDE5" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ background: f.bg }}
            >
              {f.icon}
            </div>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: f.accent, fontFamily: "var(--font-display)" }}
            >
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#4A5E44" }}>
              {f.desc}
            </p>
            {f.cta && f.action && (
              <button
                className="btn-ghost self-start"
                style={{ borderColor: f.bg, color: f.accent }}
                onClick={f.action}
              >
                {f.cta} →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Nature Quote Section ─────────────────────────────────────────────────────

function NatureQuoteSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
      <img
        src={IMGS.forest}
        alt="Lush green Indian forest"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.65) 100%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}>
            "Language is the road map of a culture."
          </p>
          <p className="text-sm mb-1" style={{ color: "#B7E4C7", fontFamily: "var(--font-display)", fontWeight: 600 }}>
            — Rita Mae Brown
          </p>
          <p className="text-sm mt-5 leading-relaxed max-w-md" style={{ color: "rgba(183,228,199,0.75)" }}>
            India's forest communities carry centuries of knowledge in their languages. bhasaSetu AI exists to make sure that knowledge isn't lost in translation — literally.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "~600", label: "Scheduled Tribe languages in India", icon: "🌐" },
            { value: "~10M", label: "Santali speakers — India's largest tribal language", icon: "🗣️" },
            { value: "UNESCO", label: "Lists many Indian tribal languages as endangered", icon: "⚠️" },
            { value: "2009", label: "Right to Education Act — still a multilingual challenge", icon: "📖" },
          ].map(s => (
            <div
              key={s.label}
              className="rounded-xl p-5 border"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", borderColor: "rgba(183,228,199,0.2)" }}
            >
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-xl font-bold mb-1" style={{ color: "#E9C46A", fontFamily: "var(--font-display)" }}>{s.value}</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(183,228,199,0.8)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CtaSection({ onTranslate, onLearn }: { onTranslate: () => void; onLearn: () => void }) {
  return (
    <section style={{ background: "#F0EFE4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{ background: "#1B4332" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={IMGS.artPainting}
              alt="Traditional Indian painting showing people in a forest"
              className="w-full h-full object-cover opacity-10"
              style={{ mixBlendMode: "luminosity" }}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 100% at 90% 50%, rgba(167,139,222,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative px-8 sm:px-12 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}
              >
                Ready to bridge the gap?
              </p>
              <p style={{ color: "#B7E4C7" }} className="max-w-md leading-relaxed">
                Try the live translator, explore vocab learning, or generate a worksheet — all running locally in your browser right now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                className="btn-primary"
                style={{ background: "#E9C46A", color: "#1B4332", whiteSpace: "nowrap" }}
                onClick={onTranslate}
              >
                Open Translator →
              </button>
              <button
                className="btn-outline"
                style={{ borderColor: "rgba(183,228,199,0.4)", color: "#B7E4C7", whiteSpace: "nowrap" }}
                onClick={onLearn}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Translator Section ───────────────────────────────────────────────────────

type SpeechRec = {
  lang: string
  interimResults: boolean
  continuous: boolean
  start: () => void
  stop: () => void
  onresult: ((e: { resultIndex: number; results: { isFinal: boolean; [n: number]: { transcript: string } }[] }) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
}
type AnyWin = Window & { SpeechRecognition?: new () => SpeechRec; webkitSpeechRecognition?: new () => SpeechRec }

function getSR(): (new () => SpeechRec) | null {
  return (window as AnyWin).SpeechRecognition ?? (window as AnyWin).webkitSpeechRecognition ?? null
}

type PipelineStep = "idle" | "listening" | "recognising" | "local" | "api" | "done" | "error"

async function myMemoryTranslate(text: string, from: string, to: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.world/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
    )
    if (!res.ok) return null
    const data = await res.json() as { responseStatus: number; responseData?: { translatedText: string } }
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      const t = data.responseData.translatedText
      if (t.toLowerCase() === text.toLowerCase()) return null
      return t
    }
    return null
  } catch {
    return null
  }
}

function TranslatorSection() {
  const [sourceLang, setSourceLang] = useState<SourceLang>("hindi")
  const [input, setInput] = useState("")
  const [interim, setInterim] = useState("")
  const [output, setOutput] = useState("")
  const [targetLang, setTargetLang] = useState<Language>("santali")
  const [step, setStep] = useState<PipelineStep>("idle")
  const [apiNote, setApiNote] = useState<string | null>(null)
  const [autoSpeak, setAutoSpeak] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [copied, setCopied] = useState(false)
  const [voiceError, setVoiceError] = useState<string | null>(null)
  const [history, setHistory] = useState<Translation[]>(() =>
    loadFromStorage<Translation[]>("bhasasetu_history", [])
  )
  const recognitionRef = useRef<SpeechRec | null>(null)
  const autoSpeakRef = useRef(autoSpeak)
  useEffect(() => { autoSpeakRef.current = autoSpeak }, [autoSpeak])

  const cfg = sourceLangConfig[sourceLang]

  const speakText = useCallback((text: string, lang?: string) => {
    if (!text) return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    if (lang) utter.lang = lang
    utter.rate = 0.9
    window.speechSynthesis.speak(utter)
  }, [])

  const saveHistory = useCallback((text: string, result: string, tLang: Language, hist: Translation[]) => {
    const entry: Translation = { id: Date.now().toString(), hindi: text, output: result, lang: tLang, timestamp: Date.now() }
    const updated = [entry, ...hist].slice(0, 20)
    setHistory(updated)
    saveToStorage("bhasasetu_history", updated)
    return updated
  }, [])

  const performTranslation = useCallback(async (
    text: string, tLang: Language, sLang: SourceLang, hist: Translation[]
  ) => {
    if (!text.trim()) return
    setApiNote(null)
    setStep("local")

    // ── Step 1: local dictionary ──────────────────────────────────────────
    const localResult = lookupTranslation(text, sLang, tLang)

    if (localResult !== "__NOT_FOUND__") {
      setOutput(localResult)
      setStep("done")
      if (localResult !== PENDING && autoSpeakRef.current) speakText(localResult)
      if (localResult !== PENDING) saveHistory(text, localResult, tLang, hist)
      return
    }

    // ── Step 2: API — translate source → English ──────────────────────────
    setStep("api")
    const srcCode = sLang === "english" ? "en" : "hi"
    let englishText: string | null = null

    if (srcCode !== "en") {
      englishText = await myMemoryTranslate(text, srcCode, "en")
    } else {
      englishText = text.toLowerCase()
    }

    if (englishText) {
      // ── Step 3: look up English result in tribal dictionary ───────────
      const viaEnglish = lookupTranslation(englishText.toLowerCase(), "english", tLang)
      if (viaEnglish !== "__NOT_FOUND__" && viaEnglish !== PENDING) {
        setOutput(viaEnglish)
        setApiNote(`via English: "${englishText}"`)
        setStep("done")
        if (autoSpeakRef.current) speakText(viaEnglish)
        saveHistory(text, viaEnglish, tLang, hist)
        return
      }

      // ── Step 4: no tribal match — surface English as fallback ─────────
      setOutput("__API_ENGLISH__")
      setApiNote(englishText)
      setStep("done")
      return
    }

    // ── Step 5: completely not found ──────────────────────────────────────
    setOutput("__NOT_FOUND__")
    setStep("error")
  }, [speakText, saveHistory])

  const translate = useCallback(() => {
    void performTranslation(input, targetLang, sourceLang, history)
  }, [input, targetLang, sourceLang, history, performTranslation])

  const handleCopy = () => {
    const toCopy = output === "__API_ENGLISH__" ? (apiNote ?? "") : output
    if (!toCopy || output === PENDING || output === "__NOT_FOUND__") return
    navigator.clipboard.writeText(toCopy).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
  }

  const handlePronounce = (text: string, lang?: string) => speakText(text, lang)

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setIsListening(false)
    setInterim("")
  }, [])

  const handleVoice = useCallback(() => {
    setVoiceError(null)
    const SR = getSR()
    if (!SR) {
      const demo = sourceLang === "english" ? "hello" : sourceLang === "hinglish" ? "namaste" : "नमस्ते"
      setInput(demo)
      void performTranslation(demo, targetLang, sourceLang, history)
      return
    }
    if (isListening) { stopListening(); return }

    setOutput("")
    setApiNote(null)
    setStep("listening")

    const rec = new SR()
    rec.lang = cfg.recognition
    rec.interimResults = true
    rec.continuous = false
    ;(rec as unknown as Record<string, unknown>).maxAlternatives = 1

    let finalReceived = false
    rec.onresult = (e) => {
      let interimText = ""
      let finalText = ""
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript
        if (e.results[i].isFinal) finalText += t
        else interimText += t
      }
      if (interimText) { setInterim(interimText); setStep("recognising") }
      if (finalText) {
        finalReceived = true
        setInput(finalText)
        setInterim("")
        setIsListening(false)
        void performTranslation(finalText, targetLang, sourceLang, history)
      }
    }
    rec.onerror = ((e: { error: string }) => {
      const err = e?.error ?? ""
      if (err === "not-allowed" || err === "permission-denied") {
        setVoiceError("Microphone access denied. Please allow microphone in browser settings.")
      } else if (err === "no-speech") {
        setVoiceError("No speech detected. Please speak clearly and try again.")
      } else if (err === "network") {
        setVoiceError("Network error. Check connection and retry.")
      } else {
        setVoiceError("Voice recognition error. Try again.")
      }
      setIsListening(false)
      setInterim("")
      setStep("error")
    }) as unknown as (() => void)
    rec.onend = () => {
      setIsListening(false)
      setInterim("")
      if (!finalReceived) setStep("idle")
    }
    recognitionRef.current = rec
    rec.start()
    setIsListening(true)
  }, [isListening, cfg.recognition, sourceLang, targetLang, history, stopListening, performTranslation])

  const clearAll = () => {
    setInput(""); setOutput(""); setInterim("")
    setApiNote(null); setStep("idle"); stopListening(); setVoiceError(null)
  }

  const hasSR = !!getSR()
  const isTranslating = step === "local" || step === "api"
  const canAction = !isTranslating && !isListening
  const isGoodOutput = output && output !== PENDING && output !== "__NOT_FOUND__" && output !== "__API_ENGLISH__"
  const isApiEnglish = output === "__API_ENGLISH__"

  const stepLabel: Record<PipelineStep, string> = {
    idle: "", listening: "Listening…", recognising: "Recognising speech…",
    local: "Checking local dictionary…", api: "Fetching via translation API…",
    done: "Translation complete", error: "Not found",
  }

  return (
    <section className="section-enter max-w-6xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="mb-8">
        <div className="tag mb-3" style={{ background: "#D8F3DC", color: "#1B4332" }}>
          ✦ Demo Language Pack · Voice supports Hindi, Hinglish &amp; English
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#1B4332" }}>Voice Translator</h2>
        <p style={{ color: "#6B7C64" }}>Speak or type in Hindi, Hinglish, or English — auto-translates to tribal language on speech end.</p>
      </div>

      {/* Source language tabs + auto-speak toggle */}
      <div className="flex flex-wrap items-center gap-3 mb-6 justify-between">
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#E8EDE5" }}>
          {(["hindi", "hinglish", "english"] as SourceLang[]).map(sl => (
            <button
              key={sl}
              onClick={() => { setSourceLang(sl); clearAll() }}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                fontFamily: "var(--font-display)",
                background: sourceLang === sl ? "#1B4332" : "transparent",
                color: sourceLang === sl ? "#FAFAF3" : "#4A5E44",
              }}
            >
              <span className="mr-1.5 text-xs opacity-70">{sourceLangConfig[sl].flag}</span>
              {sourceLangConfig[sl].label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <div
            className="relative w-10 h-5 rounded-full transition-all"
            style={{ background: autoSpeak ? "#1B4332" : "#D4E6D0" }}
            onClick={() => setAutoSpeak(v => !v)}
          >
            <div
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all"
              style={{ left: autoSpeak ? "calc(100% - 1.1rem)" : "0.1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
            />
          </div>
          <span className="text-xs font-medium" style={{ color: "#4A5E44", fontFamily: "var(--font-display)" }}>
            🔊 Auto-speak
          </span>
        </label>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6">

        {/* ── Left: Input panel ── */}
        <div className="flex flex-col gap-4">

          {/* Big voice button */}
          <div
            className="card flex flex-col items-center justify-center py-10 relative overflow-hidden"
            style={{ background: isListening ? "#1B4332" : "white", borderColor: isListening ? "#2D6A4F" : "#E8EDE5", transition: "background 0.4s, border-color 0.4s" }}
          >
            {/* Animated rings — only when listening */}
            {isListening && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-28 h-28 rounded-full voice-ring-1" style={{ border: "2px solid #40916C" }} />
                <div className="absolute w-28 h-28 rounded-full voice-ring-2" style={{ border: "1.5px solid #B7E4C7" }} />
                <div className="absolute w-28 h-28 rounded-full voice-ring-3" style={{ border: "1px solid #E9C46A" }} />
              </div>
            )}

            <button
              onClick={handleVoice}
              aria-label={isListening ? "Stop listening" : "Start voice input"}
              className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all"
              style={{
                background: isListening ? "#40916C" : "#D8F3DC",
                border: `3px solid ${isListening ? "#B7E4C7" : "#1B4332"}`,
                boxShadow: isListening ? "0 0 0 0 #40916C" : "0 4px 20px rgba(27,67,50,0.15)",
              }}
            >
              {isListening ? (
                <span className="flex gap-0.5 items-end h-7">
                  {[...Array(7)].map((_, i) => <span key={i} className="wave-bar" />)}
                </span>
              ) : (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="13" y="3" width="10" height="18" rx="5" fill="#1B4332" />
                  <path d="M6 18c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <line x1="18" y1="30" x2="18" y2="33" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="13" y1="33" x2="23" y2="33" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              )}
            </button>

            <p className="mt-4 text-sm font-semibold relative z-10" style={{ color: isListening ? "#B7E4C7" : "#1B4332", fontFamily: "var(--font-display)" }}>
              {isListening ? `Listening in ${cfg.label}…` : `Tap to speak in ${cfg.label}`}
            </p>

            {/* Interim transcript */}
            {(isListening || interim) && (
              <p className="mt-2 text-base text-center px-4 relative z-10 max-w-xs" style={{ color: interim ? "#E9C46A" : "rgba(183,228,199,0.5)", fontFamily: sourceLang === "hindi" ? "var(--font-devanagari)" : "var(--font-body)", minHeight: 28 }}>
                {interim || "Start speaking…"}
              </p>
            )}

            {/* Step status (shown when not listening) */}
            {!isListening && step !== "idle" && stepLabel[step] && (
              <div className="mt-2 flex items-center gap-1.5 relative z-10">
                {(step === "local" || step === "api") && (
                  <span className="w-3 h-3 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "#40916C", borderTopColor: "transparent" }} />
                )}
                <span className="text-xs" style={{ color: step === "error" ? "#DC2626" : step === "done" ? "#40916C" : "#B7E4C7", fontFamily: "var(--font-display)" }}>
                  {stepLabel[step]}
                </span>
              </div>
            )}

            {!hasSR && (
              <p className="mt-3 text-xs relative z-10" style={{ color: "#9AAD8F" }}>
                Voice not available in this browser — use Chrome or Edge
              </p>
            )}
            {voiceError && (
              <div className="mt-3 px-4 py-2 rounded-lg text-xs text-center relative z-10 max-w-xs" style={{ background: "rgba(220,38,38,0.1)", color: "#DC2626", border: "1px solid rgba(220,38,38,0.2)" }}>
                {voiceError}
              </div>
            )}
          </div>

          {/* Text input */}
          <div className="card flex flex-col gap-3" style={{ padding: "1rem" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
                Or type manually
              </span>
              {input && (
                <button className="text-xs" style={{ color: "#9AAD8F" }} onClick={clearAll}>Clear ✕</button>
              )}
            </div>
            <textarea
              className="w-full rounded-lg border p-3 resize-none leading-relaxed"
              style={{
                borderColor: "#D4E6D0",
                fontFamily: cfg.font,
                color: "#1A2415",
                background: "#F9FBF8",
                minHeight: "90px",
                fontSize: sourceLang === "hindi" ? "1.15rem" : "1rem",
              }}
              placeholder={cfg.placeholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && e.ctrlKey) { e.preventDefault(); translate() } }}
            />

            {/* Target language + translate */}
            <div className="flex gap-2 items-center flex-wrap">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-xs font-semibold" style={{ color: "#6B7C64", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>→ To:</span>
                <select
                  className="flex-1 rounded-lg border p-2 text-sm min-w-0"
                  style={{ borderColor: "#D4E6D0", fontFamily: "var(--font-display)", color: "#1A2415", background: "#F9FBF8" }}
                  value={targetLang}
                  onChange={e => setTargetLang(e.target.value as Language)}
                >
                  {(Object.entries(languageNames) as [Language, string][]).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <button
                className="btn-primary"
                onClick={translate}
                disabled={!canAction || !input.trim()}
                style={{ opacity: !input.trim() ? 0.45 : 1, flexShrink: 0 }}
              >
                {isTranslating ? "…" : "Translate →"}
              </button>
            </div>
            <p className="text-xs" style={{ color: "#9AAD8F" }}>Ctrl+Enter to translate</p>
          </div>
        </div>

        {/* ── Right: Output panel ── */}
        <div className="flex flex-col gap-4">
          <div className="card flex flex-col gap-4 flex-1" style={{ minHeight: 320 }}>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
                {languageNames[targetLang]} Output
              </span>
              <span className="tag text-xs" style={{ background: "#EDE9FE", color: "#5B3A8C", padding: "0.2rem 0.6rem" }}>
                ✦ AI · Demo
              </span>
            </div>

            {/* Pipeline */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { icon: "🎙️", label: cfg.label },
                { icon: "→", label: "" },
                { icon: "🧠", label: "Translate" },
                { icon: "→", label: "" },
                { icon: "🔊", label: languageNames[targetLang].split(" ")[0] },
              ].map((s, i) => (
                s.label ? (
                  <div key={i} className="flex items-center gap-1 px-2 py-0.5 rounded-md" style={{ background: "#F0EFE4" }}>
                    <span className="text-xs">{s.icon}</span>
                    <span className="text-xs font-medium" style={{ color: "#4A5E44", fontFamily: "var(--font-display)" }}>{s.label}</span>
                  </div>
                ) : <span key={i} className="text-xs" style={{ color: "#B7E4C7" }}>→</span>
              ))}
            </div>

            <div
              className="flex-1 rounded-xl border p-5 flex items-center justify-center"
              style={{
                borderColor: isGoodOutput ? "#B7E4C7" : isApiEnglish ? "#FCD34D" : "#E8EDE5",
                background: isGoodOutput ? "#F0FAF4" : isApiEnglish ? "#FFFBEB" : "#F9FBF8",
                minHeight: 140,
              }}
            >
              {isTranslating ? (
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="flex gap-1 items-end h-8">
                    {[...Array(7)].map((_, i) => <span key={i} className="wave-bar" />)}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
                    {step === "api" ? "Checking translation API…" : "Searching local dictionary…"}
                  </span>
                  {step === "api" && (
                    <span className="text-xs" style={{ color: "#9AAD8F" }}>Using MyMemory · free API · no data stored</span>
                  )}
                </div>
              ) : output === PENDING ? (
                <div className="w-full">
                  <p className="font-semibold mb-1 flex items-center gap-2" style={{ color: "#C8841A", fontFamily: "var(--font-display)" }}>
                    <span>🔄</span> Translation Pending Review
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7C64" }}>
                    Phrase recognised — {languageNames[targetLang]} translation awaiting native-speaker validation.
                  </p>
                </div>
              ) : output === "__NOT_FOUND__" ? (
                <div className="w-full">
                  <p className="font-semibold mb-1 flex items-center gap-2" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
                    <span>🔍</span> No tribal translation found
                  </p>
                  <p className="text-sm" style={{ color: "#9AAD8F" }}>
                    Neither the local pack nor the API could find a {languageNames[targetLang]} equivalent. Try a simpler word.
                  </p>
                </div>
              ) : isApiEnglish ? (
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag text-xs" style={{ background: "#FEF3C7", color: "#92400E", padding: "0.15rem 0.5rem" }}>🌐 API result · no tribal match</span>
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: "#92400E", fontFamily: "var(--font-display)" }}>
                    {apiNote}
                  </p>
                  <p className="text-xs" style={{ color: "#9AAD8F" }}>
                    English equivalent found via API — no {languageNames[targetLang]} entry in demo pack yet
                  </p>
                </div>
              ) : isGoodOutput ? (
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-3">
                    {apiNote && (
                      <span className="tag text-xs" style={{ background: "#EDE9FE", color: "#5B3A8C", padding: "0.15rem 0.5rem" }}>🌐 via API</span>
                    )}
                  </div>
                  <p className="text-4xl font-bold mb-1" style={{ color: "#1B4332", fontFamily: "var(--font-display)", lineHeight: 1.15 }}>
                    {output}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#9AAD8F" }}>{languageRegions[targetLang]}</p>
                  {apiNote && (
                    <p className="text-xs" style={{ color: "#9AAD8F" }}>Matched {apiNote}</p>
                  )}
                  {input && (
                    <p className="text-sm mt-1" style={{ color: "#6B7C64", fontFamily: sourceLang === "hindi" ? "var(--font-devanagari)" : "var(--font-body)" }}>
                      ← {input}
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-3xl mb-2 opacity-20">🔊</p>
                  <p className="text-sm" style={{ color: "#9AAD8F" }}>Translation appears here</p>
                  <p className="text-xs mt-1" style={{ color: "#C5D3C0" }}>Speak or type, then hit Translate</p>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button className="btn-ghost flex-1" onClick={handleCopy} disabled={!isGoodOutput && !isApiEnglish}>
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
              <button
                className="btn-ghost flex-1"
                onClick={() => { if (isGoodOutput) handlePronounce(output) }}
                disabled={!isGoodOutput}
              >
                🔊 Speak output
              </button>
              <button
                className="btn-ghost"
                onClick={() => input && handlePronounce(input, cfg.recognition)}
                disabled={!input}
                title="Hear source phrase"
              >
                🗣️ Source
              </button>
            </div>
          </div>

          {/* Quick phrases by source */}
          <div className="card" style={{ padding: "1rem" }}>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
              Quick phrases — {cfg.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {(sourceLang === "hindi"
                ? ["नमस्ते", "पानी", "शिक्षक", "मैं ठीक हूँ", "मुझे मदद चाहिए", "धन्यवाद", "स्कूल कहाँ है?"]
                : sourceLang === "hinglish"
                ? ["namaste", "paani", "ghar", "main theek hoon", "mujhe madad chahiye", "shukriya", "alvida"]
                : ["hello", "water", "teacher", "i am fine", "i need help", "thank you", "good morning"]
              ).map(phrase => (
                <button
                  key={phrase}
                  className="btn-ghost"
                  style={{ fontSize: "0.8rem", padding: "0.3rem 0.75rem", fontFamily: sourceLang === "hindi" ? "var(--font-devanagari)" : "var(--font-body)" }}
                  onClick={() => {
                    setInput(phrase)
                    performTranslation(phrase, targetLang, sourceLang, history)
                  }}
                >
                  {phrase}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs" style={{ color: "#9AAD8F" }}>
            ⚠️ Demo data only. Validate with native speakers before classroom use.
          </p>
        </div>
      </div>

      {/* Recent translations */}
      {history.length > 0 && (
        <div className="mt-10">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
            Recent Translations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {history.slice(0, 6).map(item => (
              <button
                key={item.id}
                className="card text-left transition-all"
                style={{ padding: "0.875rem 1rem", borderColor: "#E8EDE5" }}
                onClick={() => { setInput(item.hindi); setTargetLang(item.lang); setOutput(item.output) }}
              >
                <p className="font-medium mb-1 truncate" style={{ color: "#1A2415", fontSize: "1rem" }}>
                  {item.hindi}
                </p>
                <p className="text-sm font-semibold truncate" style={{ color: "#2D6A4F" }}>{item.output}</p>
                <p className="text-xs mt-1" style={{ color: "#9AAD8F" }}>{languageNames[item.lang]}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Learn Section ────────────────────────────────────────────────────────────

function LearnSection() {
  const [learnedIds, setLearnedIds] = useState<Set<string>>(() => {
    const stored = loadFromStorage<string[]>("bhasasetu_learned", [])
    return new Set(stored)
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeLang, setActiveLang] = useState<Language>("santali")
  const [showTranslation, setShowTranslation] = useState(false)

  const card = vocabCards[currentIndex]
  const progress = Math.round((learnedIds.size / vocabCards.length) * 100)

  const handleMarkLearned = () => {
    const updated = new Set(learnedIds)
    updated.add(`${currentIndex}`)
    setLearnedIds(updated)
    saveToStorage("bhasasetu_learned", Array.from(updated))
    setShowTranslation(false)
    if (currentIndex < vocabCards.length - 1) setCurrentIndex(i => i + 1)
  }

  const handlePronounce = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = "hi-IN"
    window.speechSynthesis.speak(utter)
  }

  const isLearned = learnedIds.has(`${currentIndex}`)

  return (
    <section className="section-enter max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#1B4332" }}>Daily Learning</h2>
          <p style={{ color: "#6B7C64" }}>Build vocabulary across tribal languages, one word at a time.</p>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ background: "white", borderColor: "#E8EDE5", minWidth: 200 }}>
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-1" style={{ color: "#6B7C64" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Progress</span>
              <span style={{ color: "#1B4332", fontWeight: 600 }}>{learnedIds.size} / {vocabCards.length}</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: "#E8EDE5" }}>
              <div
                className="h-2 rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg, #2D6A4F, #40916C)" }}
              />
            </div>
          </div>
          <span className="text-lg font-bold" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
            {progress}%
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(languageNames) as Language[]).map(l => (
          <button
            key={l}
            className={`nav-link ${activeLang === l ? "active" : ""}`}
            onClick={() => setActiveLang(l)}
          >
            {l === "santali" ? "Santali" : l === "gondi" ? "Gondi" : l === "bhili" ? "Bhili" : "Kui"}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div
            className="card relative overflow-hidden"
            style={{ background: isLearned ? "#F0FAF4" : "white", borderColor: isLearned ? "#40916C" : "#E8EDE5", minHeight: 280 }}
          >
            {isLearned && (
              <div
                className="absolute top-3 right-3 tag"
                style={{ background: "#D8F3DC", color: "#1B4332", fontSize: "0.7rem" }}
              >
                ✓ Learned
              </div>
            )}

            <div className="flex items-center gap-2 mb-1">
              <span className="tag text-xs" style={{ background: "#FEF3C7", color: "#92400E", padding: "0.15rem 0.6rem" }}>
                {card.category}
              </span>
              <span className="text-xs" style={{ color: "#9AAD8F" }}>
                {currentIndex + 1} of {vocabCards.length}
              </span>
            </div>

            <p
              className="text-6xl font-bold mb-1 mt-4"
              style={{ fontFamily: "var(--font-devanagari)", color: "#1B4332" }}
            >
              {card.hindi}
            </p>
            <p className="text-base mb-1" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
              {card.transliteration}
            </p>
            <p className="text-sm mb-6" style={{ color: "#9AAD8F" }}>
              {card.meaning}
            </p>

            <button
              onClick={() => setShowTranslation(t => !t)}
              className="btn-ghost mb-4"
            >
              {showTranslation ? "Hide" : "Show"} {activeLang} translation
            </button>

            {showTranslation && (
              <div
                className="rounded-lg p-4 border"
                style={{ background: "#EDE9FE", borderColor: "#C4B5FD" }}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: "#3B1F7A", fontFamily: "var(--font-display)" }}>
                  {card.translations[activeLang]}
                </p>
                <p className="text-xs" style={{ color: "#7C5CBF" }}>{languageNames[activeLang]}</p>
              </div>
            )}

            <div className="flex gap-2 mt-5">
              <button
                className="btn-ghost"
                onClick={() => handlePronounce(card.hindi)}
              >
                🔊 Pronounce Hindi
              </button>
              {showTranslation && (
                <button
                  className="btn-ghost"
                  onClick={() => handlePronounce(card.translations[activeLang])}
                >
                  🔊 Pronounce {activeLang}
                </button>
              )}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleMarkLearned}
                disabled={isLearned}
                className="btn-primary"
                style={{ opacity: isLearned ? 0.5 : 1 }}
              >
                {isLearned ? "✓ Learned" : "Mark as Learned"}
              </button>
              {currentIndex > 0 && (
                <button className="btn-ghost" onClick={() => { setCurrentIndex(i => i - 1); setShowTranslation(false) }}>
                  ← Prev
                </button>
              )}
              {currentIndex < vocabCards.length - 1 && (
                <button className="btn-ghost" onClick={() => { setCurrentIndex(i => i + 1); setShowTranslation(false) }}>
                  Next →
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm" style={{ color: "#6B7C64", fontFamily: "var(--font-display)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            All Words
          </h3>
          <div className="flex flex-col gap-2 overflow-y-auto" style={{ maxHeight: 420 }}>
            {vocabCards.map((c, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setShowTranslation(false) }}
                className="card text-left transition-all"
                style={{
                  padding: "0.625rem 0.875rem",
                  background: i === currentIndex ? "#F0FAF4" : "white",
                  borderColor: i === currentIndex ? "#40916C" : learnedIds.has(`${i}`) ? "#B7E4C7" : "#E8EDE5",
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "var(--font-devanagari)", color: "#1A2415", fontSize: "1.1rem" }}>
                    {c.hindi}
                  </span>
                  {learnedIds.has(`${i}`) && (
                    <span className="text-xs" style={{ color: "#40916C" }}>✓</span>
                  )}
                </div>
                <span className="text-xs" style={{ color: "#9AAD8F" }}>{c.transliteration} · {c.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Worksheet Section ────────────────────────────────────────────────────────

const LEVELS = ["Beginner", "Class 6–8", "Class 9–10"] as const
const ACTIVITIES = ["Read Aloud", "Match Words", "Fill in the Blank"] as const

function WorksheetSection() {
  const [lang, setLang] = useState<Language>("santali")
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("Beginner")
  const [activity, setActivity] = useState<(typeof ACTIVITIES)[number]>("Read Aloud")
  const [worksheetData, setWorksheetData] = useState<WorksheetEntry[] | null>(null)

  const generate = () => {
    setWorksheetData(getWorksheetData(lang, level, activity))
  }

  const downloadTxt = () => {
    if (!worksheetData) return
    const lines = [
      `bhasaSetu AI — Bilingual Worksheet`,
      `Language: ${languageNames[lang]}  |  Level: ${level}  |  Activity: ${activity}`,
      `Generated: ${new Date().toLocaleDateString("en-IN")}`,
      "",
      "No. | Hindi | Transliteration | Translation",
      "─".repeat(60),
      ...worksheetData.map((r, i) => `${i + 1}.  | ${r.hindi} | ${r.transliteration} | ${r.translation}`),
      "",
      "⚠️  Demo data — validate with native speakers before classroom use.",
    ]
    const blob = new Blob([lines.join("\n")], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `bhasasetu-worksheet-${lang}-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="section-enter max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#1B4332" }}>Worksheet Generator</h2>
        <p style={{ color: "#6B7C64" }}>Generate printable bilingual worksheets for your classroom.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
            Language Pack
          </label>
          <select
            className="w-full rounded-lg border p-2.5 text-sm"
            style={{ borderColor: "#D4E6D0", fontFamily: "var(--font-display)", color: "#1A2415", background: "#F9FBF8" }}
            value={lang}
            onChange={e => setLang(e.target.value as Language)}
          >
            {(Object.entries(languageNames) as [Language, string][]).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
            Level
          </label>
          <select
            className="w-full rounded-lg border p-2.5 text-sm"
            style={{ borderColor: "#D4E6D0", fontFamily: "var(--font-display)", color: "#1A2415", background: "#F9FBF8" }}
            value={level}
            onChange={e => setLevel(e.target.value as typeof level)}
          >
            {LEVELS.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>
            Activity Type
          </label>
          <select
            className="w-full rounded-lg border p-2.5 text-sm"
            style={{ borderColor: "#D4E6D0", fontFamily: "var(--font-display)", color: "#1A2415", background: "#F9FBF8" }}
            value={activity}
            onChange={e => setActivity(e.target.value as typeof activity)}
          >
            {ACTIVITIES.map(a => <option key={a}>{a}</option>)}
          </select>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap">
        <button className="btn-primary" onClick={generate}>Generate Worksheet</button>
        {worksheetData && (
          <>
            <button className="btn-outline" onClick={() => window.print()}>🖨️ Print / Save PDF</button>
            <button className="btn-ghost" onClick={downloadTxt}>⬇️ Download TXT</button>
          </>
        )}
      </div>

      {worksheetData && (
        <div className="card" id="worksheet-print">
          <div className="mb-6 pb-4 border-b" style={{ borderColor: "#E8EDE5" }}>
            <div className="flex items-center gap-3 mb-2">
              <Logo size={28} />
              <div>
                <p className="font-bold" style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}>bhasaSetu AI — भाषा सेतु</p>
                <p className="text-xs" style={{ color: "#6B7C64" }}>Bilingual Classroom Worksheet</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#6B7C64" }}>
              <span><strong style={{ color: "#1B4332" }}>Language:</strong> {languageNames[lang]}</span>
              <span><strong style={{ color: "#1B4332" }}>Level:</strong> {level}</span>
              <span><strong style={{ color: "#1B4332" }}>Activity:</strong> {activity}</span>
              <span><strong style={{ color: "#1B4332" }}>Date:</strong> {new Date().toLocaleDateString("en-IN")}</span>
            </div>
          </div>

          {activity === "Read Aloud" && (
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Read each word aloud in Hindi, then in {lang}:</p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#F0FAF4" }}>
                    <th className="text-left p-3 border font-semibold" style={{ borderColor: "#D4E6D0", color: "#1B4332", fontFamily: "var(--font-display)", width: "8%" }}>#</th>
                    <th className="text-left p-3 border font-semibold" style={{ borderColor: "#D4E6D0", color: "#1B4332", fontFamily: "var(--font-display)" }}>Hindi (हिंदी)</th>
                    <th className="text-left p-3 border font-semibold" style={{ borderColor: "#D4E6D0", color: "#1B4332", fontFamily: "var(--font-display)" }}>Pronunciation</th>
                    <th className="text-left p-3 border font-semibold" style={{ borderColor: "#D4E6D0", color: "#5B3A8C", fontFamily: "var(--font-display)" }}>
                      {lang.charAt(0).toUpperCase() + lang.slice(1)} Translation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {worksheetData.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFDF8" }}>
                      <td className="p-3 border text-center" style={{ borderColor: "#E8EDE5", color: "#9AAD8F" }}>{i + 1}</td>
                      <td className="p-3 border" style={{ borderColor: "#E8EDE5", fontFamily: "var(--font-devanagari)", color: "#1A2415", fontSize: "1.1rem" }}>{row.hindi}</td>
                      <td className="p-3 border" style={{ borderColor: "#E8EDE5", color: "#6B7C64" }}>{row.transliteration}</td>
                      <td className="p-3 border" style={{ borderColor: "#E8EDE5", color: "#2D6A4F", fontWeight: 500 }}>{row.translation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activity === "Match Words" && (
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Draw a line to match each Hindi word with its {lang} translation:</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>Hindi</p>
                  {worksheetData.map((row, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg border" style={{ borderColor: "#D4E6D0", background: "#F9FBF8" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#1B4332", color: "white", fontFamily: "var(--font-display)" }}>
                        {i + 1}
                      </span>
                      <span style={{ fontFamily: "var(--font-devanagari)", color: "#1A2415" }}>{row.hindi}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "#6B7C64", fontFamily: "var(--font-display)" }}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</p>
                  {[...worksheetData].sort(() => Math.random() - 0.5).map((row, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg border" style={{ borderColor: "#C4B5FD", background: "#F9F6FF" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#6B4FAF", color: "white", fontFamily: "var(--font-display)" }}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span style={{ color: "#3B1F7A", fontWeight: 500 }}>{row.translation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activity === "Fill in the Blank" && (
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Fill in the blank with the correct {lang} word:</p>
              <div className="flex flex-col gap-3">
                {worksheetData.map((row, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: "#E8EDE5", background: "#FAFDF8" }}>
                    <span className="text-sm font-semibold w-6 text-center" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>{i + 1}.</span>
                    <span style={{ fontFamily: "var(--font-devanagari)", color: "#1A2415", fontSize: "1.1rem" }}>{row.hindi}</span>
                    <span style={{ color: "#9AAD8F" }}>→</span>
                    <span style={{ color: "#6B7C64", fontStyle: "italic" }}>{row.transliteration}</span>
                    <span style={{ color: "#9AAD8F" }}>→</span>
                    <span
                      className="flex-1 border-b-2 inline-block"
                      style={{ borderColor: "#2D6A4F", minWidth: 120, height: 28 }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 rounded-lg border" style={{ background: "#FEF3C7", borderColor: "#FCD34D" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#92400E" }}>Answer Key:</p>
                <div className="flex flex-wrap gap-3">
                  {worksheetData.map((row, i) => (
                    <span key={i} className="text-xs" style={{ color: "#92400E" }}>
                      {i + 1}. {row.translation}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs" style={{ color: "#9AAD8F" }}>
            ⚠️ Demo language pack · Verify translations with native speakers before classroom use · bhasaSetu AI
          </p>
        </div>
      )}
    </section>
  )
}

// ─── Offline Section ──────────────────────────────────────────────────────────

function OfflineSection() {
  const [history, setHistory] = useState<Translation[]>(() =>
    loadFromStorage<Translation[]>("bhasasetu_history", [])
  )
  const [learned] = useState<string[]>(() =>
    loadFromStorage<string[]>("bhasasetu_learned", [])
  )
  const [resetDone, setResetDone] = useState(false)

  const handleReset = () => {
    if (!confirm("Reset all local data? This cannot be undone.")) return
    localStorage.removeItem("bhasasetu_history")
    localStorage.removeItem("bhasasetu_learned")
    setHistory([])
    setResetDone(true)
    setTimeout(() => setResetDone(false), 3000)
  }

  const statusItems = [
    { label: "Translation Pack", value: "Ready", icon: "📦", color: "#40916C", bg: "#D8F3DC" },
    { label: "Classroom Phrases", value: "124", icon: "🗣️", color: "#C8841A", bg: "#FEF3C7" },
    { label: "Voice Prompts", value: "Ready", icon: "🎙️", color: "#40916C", bg: "#D8F3DC" },
    { label: "Local Progress", value: `${learned.length} words`, icon: "📈", color: "#5B3A8C", bg: "#EDE9FE" },
    { label: "Recent Translations", value: `${history.length} saved`, icon: "🔄", color: "#1B4332", bg: "#D8F3DC" },
    { label: "Demo Pack Loaded", value: "100%", icon: "✦", color: "#C8841A", bg: "#FEF3C7" },
  ]

  return (
    <section className="section-enter max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#1B4332" }}>Offline Control Room</h2>
        <p style={{ color: "#6B7C64" }}>The core prototype runs without internet — all demo data is embedded locally.</p>
      </div>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{ background: "#1B4332", borderColor: "#2D6A4F" }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#B7E4C7", fontFamily: "var(--font-display)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Connection Status
            </p>
            <p className="text-2xl font-bold" style={{ color: "#FAFAF3", fontFamily: "var(--font-display)" }}>
              Offline-Ready ✓
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "#D8F3DC" }}>
            <span className="status-dot" />
            <span className="text-sm font-semibold" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>Live</span>
          </div>
        </div>
        <p className="text-sm mb-4" style={{ color: "#B7E4C7" }}>
          The demo language dictionary, vocabulary packs, and learning progress are stored in your browser's localStorage. No server required for core functionality.
        </p>
        <div className="mb-1 flex justify-between text-xs" style={{ color: "#B7E4C7" }}>
          <span>Demo Pack Loaded</span>
          <span>100%</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: "#2D6A4F" }}>
          <div className="h-2 rounded-full" style={{ width: "100%", background: "linear-gradient(90deg, #40916C, #B7E4C7)" }} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statusItems.map(item => (
          <div key={item.label} className="card flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: item.bg }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: "#9AAD8F" }}>{item.label}</p>
              <p className="font-bold text-lg leading-tight" style={{ color: item.color, fontFamily: "var(--font-display)" }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {history.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-sm" style={{ color: "#6B7C64", fontFamily: "var(--font-display)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Recent Translations (localStorage)
          </h3>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            {history.slice(0, 8).map((item, i) => (
              <div
                key={item.id}
                className="flex items-center gap-4 px-4 py-3 border-b last:border-b-0"
                style={{ borderColor: "#F0F4EE" }}
              >
                <span className="text-xs font-bold w-6 text-center" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
                  {i + 1}
                </span>
                <span style={{ fontFamily: "var(--font-devanagari)", color: "#1A2415", minWidth: 80 }}>{item.hindi}</span>
                <span style={{ color: "#9AAD8F" }}>→</span>
                <span className="flex-1 font-medium" style={{ color: "#2D6A4F" }}>{item.output}</span>
                <span className="tag text-xs" style={{ background: "#EDE9FE", color: "#5B3A8C", padding: "0.15rem 0.5rem", flexShrink: 0 }}>
                  {item.lang}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          className="btn-outline"
          style={{ borderColor: "#DC2626", color: "#DC2626" }}
          onClick={handleReset}
        >
          🗑️ Reset Local Data
        </button>
        {resetDone && (
          <span className="text-sm" style={{ color: "#40916C" }}>✓ Local data cleared.</span>
        )}
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const pipeline = [
    { icon: "🎙️", label: "Hindi Voice", sublabel: "Speak naturally in Hindi", color: "#1B4332" },
    { icon: "📝", label: "Speech to Text", sublabel: "Browser Web Speech API (hi-IN)", color: "#2D6A4F" },
    { icon: "🧠", label: "Offline Translation", sublabel: "Local dictionary + AI matching", color: "#5B3A8C" },
    { icon: "🔊", label: "Local Language Voice", sublabel: "speechSynthesis output", color: "#C8841A" },
  ]

  const features = [
    {
      title: "Modular Language Packs",
      desc: "Each tribal language ships as a self-contained pack — dictionary, phonetics, vocabulary cards, and worksheets. Educators can validate and extend packs for their region.",
      icon: "📦",
      accent: "#1B4332",
      bg: "#D8F3DC",
    },
    {
      title: "Community Validation",
      desc: "Demo translations are illustrative starting points. Production deployments require review by native speakers, linguists, and local teachers to ensure cultural accuracy.",
      icon: "🤝",
      accent: "#5B3A8C",
      bg: "#EDE9FE",
    },
    {
      title: "Privacy-first · Local-first",
      desc: "No data leaves your device. All processing happens in-browser using the Web Speech API and a local dictionary. localStorage persists your learning progress offline.",
      icon: "🔒",
      accent: "#C8841A",
      bg: "#FEF3C7",
    },
  ]

  return (
    <section className="section-enter max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#1B4332" }}>How It Works</h2>
        <p style={{ color: "#6B7C64" }}>A local-first pipeline — from Hindi voice to tribal language audio.</p>
      </div>

      <div className="relative mb-16">
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "#D4E6D0", transform: "translateX(-50%)" }} />

        {pipeline.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-6 mb-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
              <div
                className={`inline-block card ${i % 2 === 0 ? "" : ""}`}
                style={{ padding: "1rem 1.5rem", maxWidth: 280 }}
              >
                <p className="font-bold text-lg mb-0.5" style={{ color: step.color, fontFamily: "var(--font-display)" }}>
                  {step.label}
                </p>
                <p className="text-sm" style={{ color: "#6B7C64" }}>{step.sublabel}</p>
              </div>
            </div>

            <div
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 border-4"
              style={{ background: "white", borderColor: step.color }}
            >
              {step.icon}
            </div>

            <div className="flex-1" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {features.map(f => (
          <div key={f.title} className="card">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ background: f.bg }}
            >
              {f.icon}
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: f.accent, fontFamily: "var(--font-display)" }}>
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#4A5E44" }}>{f.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="mt-10 rounded-xl p-6 border"
        style={{ background: "#FAFDF8", borderColor: "#B7E4C7" }}
      >
        <p className="font-bold mb-2" style={{ color: "#1B4332", fontFamily: "var(--font-display)" }}>
          ⚠️ Important Product Note
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#4A5E44" }}>
          bhasaSetu AI is a demonstration MVP, not a production-grade tribal language translation system. All language outputs are illustrative demo data. Do not rely on this prototype for accurate translations. Production deployments must involve qualified linguists, community educators, and native speakers of each language.
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ setActive }: { setActive: (s: Section) => void }) {
  return (
    <footer className="border-t mt-16" style={{ borderColor: "#E8EDE5", background: "#F0EFE4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Logo size={30} />
              <div>
                <p className="font-bold" style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}>bhasaSetu AI</p>
                <p className="text-xs" style={{ fontFamily: "var(--font-devanagari)", color: "#6B7C64" }}>भाषा सेतु</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7C64" }}>
              Bridging Languages. Empowering Communities.
            </p>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-wide mb-3" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
              Features
            </p>
            {[
              { label: "Live Translator", section: "translate" as Section },
              { label: "Daily Learning", section: "learn" as Section },
              { label: "Worksheet Generator", section: "worksheet" as Section },
              { label: "Offline Dashboard", section: "offline" as Section },
            ].map(item => (
              <button
                key={item.section}
                onClick={() => setActive(item.section)}
                className="block text-sm mb-1.5 hover:underline text-left"
                style={{ color: "#4A5E44" }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-wide mb-3" style={{ color: "#9AAD8F", fontFamily: "var(--font-display)" }}>
              Languages Supported
            </p>
            {Object.entries(languageNames).map(([k, v]) => (
              <p key={k} className="text-sm mb-1" style={{ color: "#4A5E44" }}>{v}</p>
            ))}
          </div>
        </div>
        <div className="border-t pt-5 flex flex-col sm:flex-row justify-between gap-3" style={{ borderColor: "#D4D9CD" }}>
          <p className="text-xs" style={{ color: "#9AAD8F" }}>
            © 2025 bhasaSetu AI · Demo Prototype · Not for production use
          </p>
          <p className="text-xs" style={{ color: "#9AAD8F" }}>
            Demo data only · Validate with native speakers
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home")

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const handleSetActive = (s: Section) => {
    setActiveSection(s)
    scrollToTop()
  }

  return (
    <div className="min-h-full flex flex-col" style={{ background: "#FAFAF3" }}>
      <Nav active={activeSection} setActive={handleSetActive} />

      <main className="flex-1">
        {activeSection === "home" && (
          <HomePage
            onTranslate={() => handleSetActive("translate")}
            onLearn={() => handleSetActive("learn")}
            onHowItWorks={() => handleSetActive("howitworks")}
            onWorksheet={() => handleSetActive("worksheet")}
          />
        )}
        {activeSection === "translate" && <TranslatorSection />}
        {activeSection === "learn" && <LearnSection />}
        {activeSection === "worksheet" && <WorksheetSection />}
        {activeSection === "offline" && <OfflineSection />}
        {activeSection === "howitworks" && <HowItWorksSection />}
      </main>

      <Footer setActive={handleSetActive} />
    </div>
  )
}
