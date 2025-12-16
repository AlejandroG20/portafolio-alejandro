export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="text-3xl font-semibold text-[#7A1E2D]">
          Alejandro<span className="font-normal text-gray-800">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#hero"
            className="text-md font-medium text-gray-800 transition-colors hover:text-[#7A1E2D]"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-md font-medium text-gray-800 transition-colors hover:text-[#7A1E2D]"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            className="text-md font-medium text-gray-800 transition-colors hover:text-[#7A1E2D]"
          >
            Proyectos
          </a>

          <a
            href="/doc/Curriculum.pdf"
            download
            className="rounded-full border border-[#7A1E2D] px-5 py-2 text-sm font-medium text-[#7A1E2D] transition-colors hover:bg-[#7A1E2D] hover:text-white"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
