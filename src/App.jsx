import Header from '../src/Pages/Header';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
