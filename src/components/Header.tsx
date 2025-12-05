// src/components/Header.tsx
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Tecnologías" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra principal */}
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900"
          >
            <span className="flex items-center justify-center h-7 w-7 rounded-md border border-slate-300 text-[0.75rem] font-semibold text-rose-900">
              A
            </span>
            <span className="leading-tight text-base sm:text-lg">
              Alejandro González
            </span>
          </a>

          {/* Navegación centrada (desktop) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition-colors hover:text-rose-900
                           after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                           after:bg-rose-900 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA a la derecha */}
          <a
            href="/doc/Curriculum.pdf"
            className="hidden md:inline-block border border-rose-900/80 text-rose-900 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-rose-50 transition-colors"
          >
            Descargar CV
          </a>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-slate-800"></span>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
            </div>
          </button>
        </div>

        {/* Navegación móvil */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 text-sm text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 hover:text-rose-900 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/doc/Curriculum.pdf"
                download="Alejandro-Gonzalez-CV.pdf"
                className="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-rose-900/70 text-rose-900 text-sm font-medium tracking-tight hover:bg-rose-50 hover:border-rose-900 transition-all"
                onClick={closeMenu}
              >
                Descargar CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
