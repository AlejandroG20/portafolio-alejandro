type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Proyecto 1",
    description:
      "Descripción breve del proyecto orientada a impacto y resultado.",
    image: "/img/project-1.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "#",
    repo: "#",
  },
  {
    title: "Proyecto 2",
    description:
      "Descripción breve del proyecto orientada a impacto y resultado.",
    image: "/img/project-2.jpg",
    tags: ["Node", "Express", "API"],
    href: "#",
    repo: "#",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#7A1E2D]/10 px-3 py-1 text-xs font-medium text-[#7A1E2D]">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#7A1E2D]/60">
      <div className="relative h-44 w-full bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-base font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.href && (
            <a
              href={project.href}
              className="text-sm font-medium text-[#7A1E2D] transition-colors hover:text-[#5A1622]"
            >
              Ver demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[#7A1E2D]">
          PROYECTOS
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900">
          Trabajo reciente
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Una selección de proyectos centrados en UI limpia, rendimiento y
          buenas prácticas frontend. Cada card está pensada para ser
          reutilizable como componente.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
