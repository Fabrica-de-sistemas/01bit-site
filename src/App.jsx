import { useEffect, useState } from 'react';
import Header from '../src/Pages/Header';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    // Função para verificar largura da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Adiciona o event listener
    window.addEventListener('resize', handleResize);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Apenas uma vez, ao montar

  console.log(isMobile);

  return (
    <>
      <Header />

      {isMobile ? (
        <main>
          <Home />
          <Services />
          <About />
          <Projects />
          <ContactUs />
        </main>
      ) : (
        <main>
          <Home />
          <About />
          <Services />
          <Projects />
          <ContactUs />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
