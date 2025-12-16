export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#7A1E2D]">
            SOBRE MÍ
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-gray-900">
            Desarrollo frontend con foco en diseño y calidad
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600">
            Soy desarrollador frontend con experiencia en la creación de
            interfaces modernas, accesibles y mantenibles. Me enfoco en
            transformar diseños limpios en código claro y escalable, priorizando
            siempre la experiencia de usuario.
          </p>

          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
            Trabajo principalmente con React, TypeScript y TailwindCSS, y me
            gusta cuidar tanto la arquitectura del proyecto como los pequeños
            detalles visuales que marcan la diferencia.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-85 w-75 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/img/perfil.jpg"
              alt="Foto de perfil"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
