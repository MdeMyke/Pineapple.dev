import takunaImg from '../../assets/takuna.png';
import diseño from '../../assets/diseñoo.png';

const glass = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-lg rounded-2xl border border-black";

const cards = [
  {
    title: 'Transparencia de Ingredientes',
    desc: 'Explora una biblioteca detallada de ingredientes para tomar decisiones informadas.'
  },
  {
    title: 'Compra sin esfuerzo',
    desc: 'Navega, compra y paga de forma segura y sencilla.'
  },
  {
    title: 'Etapas',
    desc: 'Investigación, funcionalidades, wireframes y accesibilidad.'
  }
];

export default function Movil() {
  return (
    <>
      <section className="w-full py-8 overflow-x-auto">
        <div className="container mx-auto px-4">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-wide text-center mb-4">
              DISEÑO <span style={{ color: 'var(--color-secondary)' }}>UX/UI</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una experiencia intuitiva y moderna para usuarios móviles.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Cards a la izquierda */}
            <div className="flex flex-col gap-6 relative">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`group p-4 transition-all hover:shadow-xl hover:-translate-y-1 ${glass}
                    ${i === 0 ? 'ml-0 md:-ml-6 md:-translate-x-2 md:w-[97%]' : ''}
                    ${i === 1 ? 'ml-0 md:ml-8 z-10 scale-105 shadow-2xl md:w-full' : ''}
                    ${i === 2 ? 'ml-0 md:-ml-6 md:-translate-x-2 md:w-[97%]' : ''}
                    relative`}
                  style={{
                    zIndex: i === 1 ? 20 : 10
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{card.desc}</p>
                </div>
              ))}
            </div>
            {/* Imagen a la derecha */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={takunaImg}
                alt="App móvil"
                className="w-[700px] md:w-[900px] drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Imagen ancho completo debajo de la sección */}
      <img
        src={diseño}
        alt="Imagen ancho completo"
        className="w-full object-cover mt-8"
        style={{ maxHeight: '400px' }}
      />
    </>
  );
}
