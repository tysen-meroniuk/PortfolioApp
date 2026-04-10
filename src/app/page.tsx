import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="pb-16 pt-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I&apos;m Tysen.
        </h1>
        <div className="mx-auto mt-8 max-w-xs overflow-hidden rounded-2xl">
          <Image
            src="/headshot.jpg"
            alt="Tysen Meroniuk"
            width={320}
            height={400}
            className="h-72 w-full rounded-2xl object-cover object-top sm:h-80"
            priority
          />
        </div>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Software engineer and founder building{" "}
          <span className="text-foreground font-medium">Field Ops</span>, an
          AI-native, offline-first platform digitizing field operations and
          compliance workflows for oil and gas operators. I care about clean
          design, thoughtful engineering, and shipping things that matter.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/50 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          About
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            I&apos;m a Computer Science student at the University of Calgary and
            co-founder of{" "}
            <span className="text-foreground font-medium">
              Synovion Technologies
            </span>
            , where we&apos;re building Field Ops, the first AI copilot for
            field operations. Operators speak naturally and our Ops CoPilot
            handles the data entry, cutting 80% of manual work. We&apos;re
            tackling a real problem: oil and gas field operations are decades
            behind digitally, with 70% of digital pilots failing to gain
            traction.
          </p>
          <p>
            I&apos;m passionate about product engineering, designing systems and
            building software that solves real problems. In my spare time I enjoy the outdoors, 
            frineds and family, and working out!
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border/50 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          What I Work With
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Java",
            "Swift",
            "Python",
            "C",
            "Haskell",
            "React Native",
            "SwiftUI",
            "Spring Boot",
            "PostgreSQL",
            "REST APIs",
            "Docker",
            "Git",
            "WhisperKit",
            "GPT API",
            "System Design",
            "Product Engineering",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
