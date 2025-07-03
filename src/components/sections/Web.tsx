import InfiniteScroll from '../ui/InfiniteScroll';
import imagen1 from '../../assets/imagen (1).png';
import imagen2 from '../../assets/imagen (2).png';
import imagen3 from '../../assets/imagen (3).png';
import imagen4 from '../../assets/imagen (4).png';

const glass = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-lg rounded-2xl border border-black";

const items = [
  { content: <img src={imagen1} alt="Imagen 1" className="mx-auto h-40 object-contain" /> },
  { content: <p className="text-center text-lg font-semibold mt-2">Monitoreo en tiempo real de vehículos y rutas.</p> },
  { content: <img src={imagen2} alt="Imagen 2" className="mx-auto h-40 object-contain" /> },
  { content: <p className="text-center text-lg font-semibold mt-2">Alertas automáticas de mantenimiento preventivo.</p> },
  { content: <img src={imagen3} alt="Imagen 3" className="mx-auto h-40 object-contain" /> },
  { content: <p className="text-center text-lg font-semibold mt-2">Gestión eficiente de conductores y asignación de tareas.</p> },
  { content: <img src={imagen4} alt="Imagen 4" className="mx-auto h-40 object-contain" /> },
  { content: <p className="text-center text-lg font-semibold mt-2">Reportes detallados de consumo de combustible y rendimiento.</p> },
];

const webCards = [
  {
    title: 'Panel de Control Centralizado',
    desc: 'Visualiza y administra toda la flota desde una sola interfaz web intuitiva.'
  },
  {
    title: 'Integración con GPS',
    desc: 'Sigue la ubicación de cada vehículo en tiempo real y optimiza rutas.'
  },
  {
    title: 'Análisis de Datos',
    desc: 'Obtén reportes automáticos sobre uso, incidencias y eficiencia operativa.'
  }
];

export default function Web() {
  return (
    <section className="w-full py-8 overflow-x-auto">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-wide text-center mb-4">
            Desarrollo <span style={{ color: 'var(--color-secondary)' }}>Web</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fleet management system un desarrollo complejo para una empresa de transporte.
          </p>
        </div>
        <div className="flex flex-row gap-8 items-start justify-center">
          {/* InfiniteScroll cuadrado a la izquierda */}
          <div className="w-[500px] h-[400px] flex-shrink-0">
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.9}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
          {/* Cards a la derecha */}
          <div className="flex-1 flex flex-col gap-10">
            {webCards.map((card, i) => (
              <div
                key={i}
                className={`group p-4 transition-all hover:shadow-xl hover:-translate-y-1 ${glass} relative`}
                style={{ zIndex: i === 1 ? 20 : 10 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
