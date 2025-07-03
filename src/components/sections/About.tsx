import React from 'react';
import about1 from '../../assets/about-m.jpeg';
import about2 from '../../assets/about-y.jpeg';

const glass = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-lg rounded-2xl";

const About: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-2 md:p-8">
      {/* Título estilo Companies */}
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wide text-center mb-2">
        HOLA <span className="text-secondary">SOY</span> <span className="font-boxing">MAICOL</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-500 text-center mb-6"></p>
      <div
        className="grid grid-cols-4 grid-rows-3 gap-0"
        style={{ width: '100vw', maxWidth: '900px', aspectRatio: '4/3' }}
      >
        {/* 1: CO */}
        <div className={`border border-black flex items-end justify-start p-2 md:p-4 aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="text-4xl md:text-7xl font-black text-black leading-none break-words w-full">CO</span>
        </div>
        {/* 2: Imagen about2 */}
        <div className={`border border-black flex items-center justify-center bg-gray-100 overflow-hidden aspect-square w-full h-full flex-shrink-0 p-2 md:p-4 ${glass}`}>
          <img src={about2} alt="about 2" className="object-cover w-full h-full rounded-xl" />
        </div>
        {/* 3: NO */}
        <div className={`border border-black flex items-start justify-end p-2 md:p-4 aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="text-4xl md:text-7xl font-black text-black leading-none break-words w-full">NO</span>
        </div>
        {/* 4: Texto superior derecho */}
        <div className={`border border-black flex flex-col items-end justify-start p-2 text-xs text-right aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="font-semibold break-words w-full">Acerca de mí</span>
          <span className="break-words w-full">Soy una persona apasionada por el aprendizaje y la creatividad. Me encanta leer libros de todo tipo, disfruto mucho de la natación y los videojuegos, actividades que me ayudan a relajarme y mantenerme motivado. Además, Mani —que puedes ver en la foto al lado— es una gran fuente de inspiración para mis diseños, ya que su energía y alegría me impulsan a crear experiencias digitales más humanas y auténticas.</span>
        </div>
        {/* 5: Frase creativa */}
        <div className={`border border-black flex items-center p-2 md:p-4 aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="text-xs md:text-lg font-bold uppercase tracking-tight text-black break-words w-full">Soy Maicol, Desarrollador de software Colombiano, especializado en desarrollo web y diseño UI/UX.</span>
        </div>
        {/* 6: CE */}
        <div className={`border border-black flex items-center justify-center aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="text-4xl md:text-7xl font-black text-black leading-none break-words w-full">CE</span>
        </div>
        {/* 7: ME */}
        <div className={`border border-black col-start-1 row-start-3 flex items-end p-2 md:p-4 aspect-square w-full h-full overflow-hidden flex-shrink-0 ${glass}`}>
          <span className="text-4xl md:text-7xl font-black text-black leading-none break-words w-full">ME</span>
        </div>
        {/* 8: Descripción */}
        <div className={`border border-black col-start-2 row-start-3 flex flex-col justify-end p-2 md:p-4 !text-[13px] md:text-base aspect-square leading-tight break-words overflow-hidden w-full h-full flex-shrink-0 ${glass}`}>
          <span className="break-words w-full">Mi pasión reside en crear y potenciar proyectos que destaquen con un estilo distintivo, asegurándome de que transmitan el mensaje correcto con una personalidad genuina y única. Inspirado por la transformación, creo en la invención sin límites, donde cada idea y proyecto tiene el potencial de trascender y dejar una huella duradera.</span>
        </div>
        {/* 9: Imagen grande */}
        <div className={`border border-black col-span-2 row-span-2 col-start-3 row-start-2 flex items-center justify-center bg-gray-100 overflow-hidden aspect-square w-full h-full flex-shrink-0 p-2 md:p-4 ${glass}`}>
          <img src={about1} alt="about 1" className="object-cover w-full h-full rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default About; 