import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Companies from './components/sections/Companies';
import Contact from './components/sections/Contact';
import MiniBanner from './components/sections/Minibanner';
import Movil from './components/sections/movil';

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
        <Contact />
      </main>
    </div>
  )
}

export default App
