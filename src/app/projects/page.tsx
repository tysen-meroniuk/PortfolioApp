import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
}

const projects: Project[] = [
  {
    title: "Field Ops",
    description:
      "A field service management platform built to help crews coordinate jobs, track progress, and stay organized. Born from real experience working in the field and seeing how much time gets wasted on bad tooling.",
    tags: ["React", "Node.js", "PostgreSQL", "Product Engineering"],
    href: "#",
    linkLabel: "Learn More",
  },
  // Add more projects here as you build them
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-24">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-muted">
          Things I&apos;ve built — from startups to systems.
        </p>
      </section>

      <section className="space-y-6 pb-24">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-border hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href={project.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                {project.linkLabel}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
