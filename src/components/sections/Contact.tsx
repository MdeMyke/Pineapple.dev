import React from 'react';

const glass = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-lg rounded-2xl border border-black";

const Contact: React.FC = () => {
  return (
    <section className="w-full pt-4 pb-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_2.2fr] gap-4 items-stretch">
        {/* Columna izquierda: Preguntas frecuentes */}
        <div className={`flex flex-col justify-center p-8 ${glass}`}>
          <h2 className="text-2xl font-black text-primary mb-6">Preguntas frecuentes</h2>
          <ul className="space-y-4">
            <li className="text-gray-700 font-semibold">¿Cómo puedo contactar a pineapple.dev?</li>
            <li className="text-gray-700 font-semibold">¿En cuánto tiempo responden?</li>
            <li className="text-gray-700 font-semibold">¿Qué servicios ofrecen?</li>
            <li className="text-gray-700 font-semibold">¿Trabajan con empresas internacionales?</li>
            {/* Puedes agregar más preguntas aquí */}
          </ul>
        </div>
        {/* Columna derecha: Formulario */}
        <form className={`flex flex-col justify-center space-y-6 p-8 px-8 md:px-60 lg:px-60 ${glass}`}>
          <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-wide text-center mb-4">Contáctanos</h2>
          <p className="text-center text-gray-500 text-lg mb-4">Cuéntanos tu idea y te ayudaremos a hacerla realidad</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="nombre" className="text-sm font-semibold text-primary">Nombre</label>
              <input id="nombre" name="nombre" type="text" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Tu nombre" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="telefono" className="text-sm font-semibold text-primary">Teléfono</label>
              <input id="telefono" name="telefono" type="tel" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Tu teléfono" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary">Email</label>
            <input id="email" name="email" type="email" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Tu correo electrónico" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="mensaje" className="text-sm font-semibold text-primary">Cuéntanos sobre tu proyecto</label>
            <textarea id="mensaje" name="mensaje" rows={4} required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Describe tu idea, necesidades y objetivos..." />
          </div>
          <button type="submit" className="mt-4 bg-secondary text-white font-bold py-3 rounded-lg shadow-md hover:brightness-110 transition-all">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 