import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Companies from './components/sections/Companies';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Companies />
        <Contact />
      </main>
    </>
  )
}

export default App
