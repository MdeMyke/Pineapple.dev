import React from 'react';

const About: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col items-center mb-12 mt-8">
        <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-wide text-center mb-4">
          <span className="text-secondary">SOY</span> <span className="font-boxing">Maicol</span>
        </h2>
        <p className="text-xl md:text-2xl text-primary text-center">
          La combinación perfecta entre
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Card Izquierda */}
        <div className="bg-white-off rounded-2xl p-8 flex items-center justify-center aspect-[5/3]">
          <span className="text-lg text-primary font-semibold text-center">Card Izquierda</span>
        </div>
        {/* Card Derecha */}
        <div className="bg-white-off rounded-2xl p-8 flex items-center justify-center aspect-[5/3]">
          <span className="text-lg text-primary font-semibold text-center">Card Derecha</span>
        </div>
      </div>
    </section>
  );
};

export default About; 