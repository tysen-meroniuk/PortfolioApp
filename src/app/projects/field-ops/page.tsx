import Image from "next/image";
import Link from "next/link";

export default function FieldOps() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Back link */}
      <div className="pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-opacity hover:opacity-70"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <section className="pb-12 pt-8">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Synovion Technologies Inc.
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Field Ops
        </h1>
        <p className="mt-2 text-lg text-muted">
          The first AI copilot for field operations.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Swift",
            "SwiftUI",
            "React Native",
            "Expo",
            "TypeScript",
            "OpenAI Realtime API",
            "Gemini AI",
            "WatermelonDB",
            "ObjectBox",
            "Firebase",
            "Offline-First",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-16">
        <div className="overflow-hidden rounded-2xl border border-border/50">
          <div className="relative aspect-[2/1] w-full bg-foreground/5">
            <Image
              src="/projects/field-ops-cover.png"
              alt="Field Ops app preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Overview
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          <p>
            Field Ops is an AI-native, offline-first mobile platform that turns
            operator speech into structured field data. Operators talk through
            inspections while photographing equipment, and{" "}
            <span className="text-foreground font-medium">Ops CoPilot</span>{" "}
            fills out forms in real time, extracting readings, conditions, and
            action items from natural conversation. What used to take 20 minutes
            of manual data entry now takes a 3-minute walkthrough.
          </p>
          <p>
            Beyond capture, Field Ops gives companies intelligence they&apos;ve
            never had. Every operator note becomes searchable, summarizable, and
            connected, surfacing patterns across sites, flagging anomalies, and
            feeding into enterprise production accounting through our B-Clouder
            partnership. It&apos;s the first product under{" "}
            <span className="text-foreground font-medium">Synovion OS</span>,
            our vision for bringing operational intelligence from the frontlines
            to the boardroom.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          How It Works
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              step: "01",
              title: "Arrive on site",
              desc: "GPS auto-detects the Legal Subdivision and surfaces the correct site and assets. No manual selection needed.",
            },
            {
              step: "02",
              title: "Pick a template",
              desc: "Choose from structured templates (Tank Gauge Log, Downtime Report, Gas Sales Meter) or go free-form with General Note.",
            },
            {
              step: "03",
              title: "Speak and shoot",
              desc: "The camera opens full-screen. Talk through the inspection naturally while snapping photos. A live checklist shows fields filling in real time as the AI extracts values from your speech.",
            },
            {
              step: "04",
              title: "Review and save",
              desc: "Check the auto-filled form, adjust any low-confidence fields, review the AI-generated summary, and save. The capture is stored offline and syncs when connectivity returns.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-5">
              <span className="mt-0.5 text-2xl font-bold tracking-tight text-foreground/20">
                {step}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Key Features
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Unified Capture",
              desc: "Full-screen camera preview with glass overlays where operators photograph equipment while speaking. A live checklist fills in real time as Ops CoPilot extracts field values from speech, with confidence indicators for each field.",
            },
            {
              title: "Ops CoPilot",
              desc: "Powered by the OpenAI Realtime API via direct WebSocket connection. Audio is streamed as PCM16, and the AI uses function calling to update checklist fields with extracted values and confidence scores in real time.",
            },
            {
              title: "Video Capture + Gemini",
              desc: "Record muted video while WhisperKit captures audio in parallel. The video and transcript are sent to Gemini 2.5 Flash for structured equipment data extraction including readings, conditions, action items, and status.",
            },
            {
              title: "AI-Guided Inspection",
              desc: "The AI guides operators through inspections with real-time prompts, coverage tracking, and a completion gate that ensures all required fields are captured before finishing.",
            },
            {
              title: "Semantic Search",
              desc: "Hybrid search combining vector similarity (ObjectBox HNSW in Swift, op-sqlite in RN) with keyword matching and recency scoring. Captures are chunked with token-count estimation for optimal embedding.",
            },
            {
              title: "Smart Summaries",
              desc: "AI-generated natural language summaries of each capture covering compressor trips, downtime events, and plant logs, with map previews showing the site's GPS location.",
            },
            {
              title: "Enterprise Sync",
              desc: "Full backend sync via Firebase Auth with a 5-state sync machine, batch coordination, photo upload pipeline, and colleague capture sharing for team-wide visibility across sites.",
            },
            {
              title: "Enterprise Integration",
              desc: "Connects to B-Clouder's Production Cloud for a complete operational view including asset management, downtime/uptime tracking, production accounting, and compliance reporting.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Technical Highlights
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          <ul className="space-y-3">
            <li>
              <span className="text-foreground font-medium">
                Two native codebases
              </span>{" "}
              with a production Swift/SwiftUI app (most complete) plus a React Native
              cross-platform rebuild (Expo SDK 52, TypeScript). Both share the
              same architecture and product design.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Dual-database architecture
              </span>{" "}
              with SwiftData + ObjectBox HNSW vector search in Swift and WatermelonDB +
              op-sqlite vector extension in RN. Embedding queries run at the C
              level in both.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Unified template system
              </span>{" "}
              using a single-file format with inline extraction prompts, data-driven
              calculation and autofill engines, and version tracking so old
              captures never break when templates update.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Auto-LSD detection
              </span>{" "}
              using GPS-based Legal Subdivision lookup with point-in-polygon against
              an 8MB GeoPackage with R-Tree spatial indexing. The app knows where
              you are.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Offline-first by design
              </span>{" "}
              with draft persistence, photos stored to filesystem (not DB BLOBs),
              queue-based sync with exponential backoff, full backup/restore
              system with versioned JSON serialization.
            </li>
            <li>
              <span className="text-foreground font-medium">
                PDF generation & sharing
              </span>{" "}
              producing multi-page PDF reports from capture data with template
              sections and photo grids, shareable directly from the app.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Meridian design language
              </span>{" "}
              a dark-first UI built for outdoor use with OLED-optimized true black,
              warm amber accents, surface elevation via luminance, glass blur
              overlays. Designed for gloves and sunlight.
            </li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Tech Stack
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {[
            ["iOS (Primary)", "Swift, SwiftUI, SwiftData"],
            ["Cross-Platform", "React Native, Expo SDK 52, TypeScript"],
            ["AI (Online)", "OpenAI Realtime API, Gemini 2.5 Flash"],
            ["AI (Offline)", "WhisperKit, whisper.rn, llama.rn"],
            ["Vector Search", "ObjectBox HNSW / op-sqlite vector ext"],
            ["Database", "SwiftData / WatermelonDB"],
            ["Auth & Sync", "Firebase Auth, batch sync pipeline"],
            ["State", "Zustand + event bus / SwiftUI @Observable"],
            ["Output", "PDF generation, shareable reports"],
            ["Validation", "Zod / Swift type system"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4">
              <span className="text-muted">{label}</span>
              <span className="text-right text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Screenshots
        </h2>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {[
            { src: "/projects/field-ops/screenshot-1.png", alt: "Home screen with assets and Smart Summaries" },
            { src: "/projects/field-ops/screenshot-2.png", alt: "Live capture with AI checklist filling in real time" },
            { src: "/projects/field-ops/screenshot-3.png", alt: "Auto-filled form from voice transcript" },
            { src: "/projects/field-ops/screenshot-4.png", alt: "Semantic search with map integration" },
          ].map(({ src, alt }) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl border border-border/50"
            >
              <Image
                src={src}
                alt={alt}
                width={200}
                height={400}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-border/50 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Validation Results
        </h2>
        <p className="mt-4 text-sm text-muted">
          POC completed with on-site validation from CryptoTherm operator.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { stat: "80%", label: "Task Autocompletion" },
            { stat: "42%", label: "Faster Logs" },
            { stat: "73%", label: "Speech-to-Text Reliability" },
          ].map(({ stat, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border/50 bg-card p-6 text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-foreground">
                {stat}
              </p>
              <p className="mt-1 text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border/50 py-12 pb-24">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Partners & Validation
        </h2>
        <div className="mt-6 max-w-xs overflow-hidden rounded-2xl border border-border/50">
          <Image
            src="/projects/field-ops/team-bclouder.jpg"
            alt="Synovion team with B-Clouder partner"
            width={300}
            height={200}
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-sm text-muted">
          The Synovion team with our B-Clouder enterprise partner.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "CryptoTherm",
            "Teleo",
            "Burke Calibration",
            "B-Clouder",
            "Astara Energy Corp.",
          ].map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
