import React from 'react';
import CardSwap, { Card } from '../ui/CardSwap';
import logo from '../../assets/logo.png';
import aboutM from '../../assets/about-m.jpeg';
import aboutY from '../../assets/about-y.jpeg';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start h-[calc(100vh-80px)]"
      style={{ height: 'calc(100vh - 80px)' }}
    >
      {/* Div a la izquierda con CardSwap, más a la derecha */}
      <div
        style={{ height: '600px', width: '400px', position: 'relative' }}
        className="ml-32 flex items-center -mt-70"
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <div className="flex flex-col h-full w-full rounded-xl overflow-hidden bg-black border border-white">
              <div className="p-4 pb-0">
                <h3 className="text-white text-xl font-bold text-center">Logo</h3>
              </div>
              <div className="flex-1">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 0, minWidth: 0 }}
                />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col h-full w-full rounded-xl overflow-hidden bg-black border border-white">
              <div className="p-4 pb-0">
                <h3 className="text-white text-xl font-bold text-center">About M</h3>
              </div>
              <div className="flex-1">
                <img
                  src={aboutM}
                  alt="About M"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 0, minWidth: 0 }}
                />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col h-full w-full rounded-xl overflow-hidden bg-black border border-white">
              <div className="p-4 pb-0">
                <h3 className="text-white text-xl font-bold text-center">About Y</h3>
              </div>
              <div className="flex-1">
                <img
                  src={aboutY}
                  alt="About Y"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 0, minWidth: 0 }}
                />
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>

      {/* Lado Derecho: Contenido original */}
      <div className="flex-1 relative h-full">
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
      </div>
    </section>
  );
};

export default Hero; 