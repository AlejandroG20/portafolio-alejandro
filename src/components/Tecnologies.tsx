type Tech = {
  name: string;
  level?: string;
};

const TECHS: Tech[] = [
  { name: "React", level: "Avanzado" },
  { name: "TypeScript", level: "Avanzado" },
  { name: "TailwindCSS", level: "Avanzado" },
  { name: "JavaScript", level: "Avanzado" },
  { name: "HTML5", level: "Avanzado" },
  { name: "CSS3", level: "Avanzado" },
  { name: "Node.js", level: "Intermedio" },
  { name: "Git / GitHub", level: "Intermedio" },
  { name: "Figma", level: "Intermedio" },
  { name: "Testing", level: "Intermedio" },
];

function TechPill({ tech }: { tech: Tech }) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-[#7A1E2D]/60">
      <span className="text-sm font-semibold text-gray-900">{tech.name}</span>

      {tech.level && (
        <span className="rounded-full bg-[#7A1E2D]/10 px-3 py-1 text-xs font-medium text-[#7A1E2D] transition-colors group-hover:bg-[#7A1E2D] group-hover:text-white">
          {tech.level}
        </span>
      )}
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[#7A1E2D]">
          TECNOLOGÍAS
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900">
          Stack y herramientas
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Tecnologías con las que trabajo habitualmente para construir
          interfaces modernas, mantenibles y enfocadas en rendimiento.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TECHS.map((t) => (
          <TechPill key={t.name} tech={t} />
        ))}
      </div>
    </section>
  );
}
