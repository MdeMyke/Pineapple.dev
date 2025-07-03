import React from 'react';
import nft from '../../assets/nft.png';

// Un componente simple para el ícono de flecha, como en la imagen.
const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const glass = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-lg rounded-2xl border border-black";

const Services: React.FC = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        
        {/* Columna Izquierda */}
        <div className={`flex flex-col p-8 ${glass}`} style={{paddingBottom: 0}}>
          <h2 className="text-6xl font-black text-primary uppercase tracking-wide leading-tight mb-8">
            Explora Mis<br/>Conocimientos
          </h2>
          {/* Imagen NFT totalmente pegada abajo, sin margen ni padding */}
          <div className="w-full flex-grow flex items-end justify-center p-0 m-0" style={{paddingBottom: 0, marginBottom: 0, minHeight: 0}}>
            <img src={nft} alt="NFT" className="w-2/4 object-contain" style={{marginBottom: 0, paddingBottom: 0, display: 'block'}} />
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-2">
            {/* Servicio 1 */}
            <div className={`group p-4 transition-all hover:shadow-xl hover:-translate-y-1 ${glass}`}>
                <h3 className="text-3xl font-bold text-primary uppercase">Identidad de Marca<br/>Única</h3>
                <div className="flex justify-between items-end mt-4">
                    <p className="text-sm text-gray-600 uppercase max-w-[150px]">Diseño identidades de marca únicas y memorables</p>
                    <ArrowUpRightIcon />
                </div>
            </div>

            {/* Servicio 2 - Resaltado */}
            <div className="group bg-secondary text-white rounded-2xl p-4 transition-all relative overflow-hidden shadow-2xl hover:-translate-y-1">
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold uppercase">Desarrollo Web &<br/>Móvil</h3>
                    <div className="flex justify-between items-end mt-4">
                        <p className="text-sm uppercase max-w-[150px]">Desarrollo de experiencias digitales impactantes</p>
                        <ArrowUpRightIcon />
                    </div>
                </div>
            </div>

            {/* Servicio 3 */}
            <div className={`group p-4 transition-all hover:shadow-xl hover:-translate-y-1 ${glass}`}>
                <h3 className="text-3xl font-bold text-primary uppercase">Diseño UX/UI</h3>
                <div className="flex justify-between items-end mt-4">
                    <p className="text-sm text-gray-600 uppercase max-w-[150px]">Garantizo experiencias intuitivas y atractivas</p>
                    <ArrowUpRightIcon />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services; 