export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#7A1E2D]">
            Alejandro<span className="font-normal text-gray-800">.Glez</span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Frontend Developer — UI limpia, accesibilidad y buenas prácticas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#hero"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
          >
            Inicio
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
          >
            Contacto
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1E2D]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-xs text-gray-500">
            © {year} Alejandro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
