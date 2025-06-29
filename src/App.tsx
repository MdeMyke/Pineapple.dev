function App() {
  return (
    <div className="min-h-screen bg-white-off p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8 font-boxing">Mi Tema de Colores</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cuadrado Negro */}
          <div className="bg-primary rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">Negro</h2>
            <p className="text-white-off">Color primario - bg-primary</p>
          </div>
          
          {/* Cuadrado Amarillo */}
          <div className="bg-secondary rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-2">Amarillo</h2>
            <p className="text-primary">Color secundario - bg-secondary</p>
          </div>
          
          {/* Cuadrado Blanco */}
          <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-2">Blanco</h2>
            <p className="text-primary">Color base - bg-white</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-primary text-lg">Fondo: bg-white-off</p>
          <p className="text-secondary text-lg">Texto secundario</p>
        </div>
      </div>
    </div>
  )
}

export default App
