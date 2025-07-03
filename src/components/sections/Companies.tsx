export default function Companies() {
  // Lista de logos de empresas (usando placeholders)
  const companies = [
    { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
    { name: "Astro", logo: "https://api.iconify.design/logos/astro-icon.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "Canva", logo: "https://images.ctfassets.net/kftzwdyauwt9/7lqBnA8Gaz7fvmABCmlQ4x/6ce679925b23e96d410c8b5509480806/Canva.png?w=3840&q=90&fm=webp" },
  ];

  return (
    <section className="w-full py-6 md:py-10 overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-wide text-center mb-4">
            Mis <span style={{ color: 'var(--color-secondary)' }}>Tecnologías</span> Favoritas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estas son las herramientas y frameworks que domino y utilizo para crear soluciones innovadoras y eficientes.
          </p>
        </div>

        {/* Contenedor de carruseles */}
        <div className="space-y-8">
          {/* Fila superior - desplazamiento hacia la derecha */}
          <div className="relative">
            <div className="flex animate-scroll-right">
              {/* Primera serie de logos */}
              {companies.map((company, index) => (
                <div key={`top-${index}`} className="flex-shrink-0 mx-6 group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      title={company.name}
                      className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
              {/* Segunda serie de logos para efecto infinito */}
              {companies.map((company, index) => (
                <div key={`top-duplicate-${index}`} className="flex-shrink-0 mx-6 group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      title={company.name}
                      className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fila inferior - desplazamiento hacia la izquierda */}
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* Primera serie de logos */}
              {companies
                .slice()
                .reverse()
                .map((company, index) => (
                  <div key={`bottom-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        title={company.name}
                        className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              {/* Segunda serie de logos para efecto infinito */}
              {companies
                .slice()
                .reverse()
                .map((company, index) => (
                  <div key={`bottom-duplicate-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        title={company.name}
                        className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Gradientes laterales para efecto de desvanecimiento */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        /* Pausa la animación al hacer hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
