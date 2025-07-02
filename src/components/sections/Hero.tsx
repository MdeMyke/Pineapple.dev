import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Textos y estadísticas posicionados de forma absoluta para recrear el diseño */}

      <div className="absolute top-[25%] left-4 max-w-[220px]">
        <p className="text-md font-semibold uppercase tracking-wider text-gray-700">
          Unleashing boundless creativity for your brand
        </p>
      </div>

      <div className="absolute top-8 right-4 flex items-start space-x-6 md:space-x-12">
        <div className="text-left">
          <p className="text-4xl md:text-5xl font-bold text-primary">+50</p>
          <p className="text-xs uppercase text-gray-500 tracking-wider">Proyectos Completados</p>
        </div>
        <div className="text-left">
          <p className="text-4xl md:text-5xl font-bold text-primary">+30</p>
          <p className="text-xs uppercase text-gray-500 tracking-wider">Empresas Confian</p>
        </div>
        <div className="text-left">
          <p className="text-4xl md:text-5xl font-bold text-primary">+100</p>
          <p className="text-xs uppercase text-gray-500 tracking-wider">Clientes Felices</p>
        </div>
      </div>

      <div className="absolute bottom-[15%] left-4 max-w-[220px]">
        <p className="text-md font-semibold uppercase tracking-wider text-gray-700">
          Visionary designers that dedicated to transforming your ideas into visual
        </p>
      </div>
      
      <div className="absolute bottom-8 right-4 text-right">
        <a href="#contact" className="text-lg font-semibold text-purple-600 mb-4 inline-block">
          Descarga mi HV &rarr;
        </a>
        <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary leading-none">
          FULL<br/>
          STACK<br/>
          CODER
        </h1>
      </div>
    </section>
  );
};

export default Hero; 