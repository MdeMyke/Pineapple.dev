import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Companies from './components/sections/Companies';
import MiniBanner from './components/sections/Minibanner';
import Movil from './components/sections/Movil';
import Web from './components/sections/Web';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="hero-gradient-bg min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <MiniBanner />
        <Services />
        <About />
        <Companies />
        <Movil />
        <Web />
        <Footer />
      </main>
    </div>
  )
}

export default App
