export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-32 md:grid-cols-2"
    >
      <div>
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Desarrollador Frontend
        </h1>

        <p className="mt-6 max-w-md text-lg text-gray-600">
          Construyo interfaces limpias, accesibles y funcionales enfocadas en
          experiencia de usuario y buenas prácticas frontend.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#7A1E2D] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5A1622]"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#7A1E2D] px-6 py-3 text-sm font-medium text-[#7A1E2D] transition-colors hover:bg-[#7A1E2D] hover:text-white"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative h-80 w-70 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <img
            src="/img/profile.jpg"
            alt="Foto de perfil"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
