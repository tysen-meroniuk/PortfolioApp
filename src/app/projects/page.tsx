import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  slug: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Field Ops",
    subtitle: "AI Copilot for Field Operations",
    description:
      "An offline-first mobile platform that lets oil field operators speak naturally while Ops CoPilot auto-fills forms, cutting 80% of manual data entry.",
    tags: ["Swift", "SwiftUI", "React Native", "WhisperKit", "GPT API"],
    slug: "field-ops",
    image: "/projects/field-ops-cover.png",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-12 pt-24">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-muted">
          Things I&apos;ve built, from startups to systems.
        </p>
      </section>

      <section className="space-y-8 pb-24">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <article className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-border hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  {project.subtitle}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
