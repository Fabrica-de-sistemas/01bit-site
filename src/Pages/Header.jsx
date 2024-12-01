import { useState, useEffect, useRef } from 'react';
import LogoDesktop from '../assets/desktop/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { Menu } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';

// Dicionário de traduções
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact Us',
  },
  pt: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    projects: 'Projetos',
    contact: 'Contate-nos',
  },
};

const Header = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('pt');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="md:hidden mt-5 mx-5 flex justify-between items-center relative">
        <img src={LogoMobile} alt="Logo 01-bit" />
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <Menu className="text-secondary-01 cursor-pointer" size={40} />
        </button>
        {isMenuOpen && (
          <ul
            ref={menuRef}
            className="flex flex-col items-center justify-center gap-6 absolute top-[100%] right-1 w-[80%] h-[353px] bg-otherColors-01 rounded-lg shadow-boxShadow z-50"
          >
            <li>
              <a
                className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].home}
              </a>
            </li>
            <li>
              <a
                className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].about}
              </a>
            </li>
            <li>
              <a
                className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].services}
              </a>
            </li>
            <li>
              <a
                className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].projects}
              </a>
            </li>
            <li>
              <a
                className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].contact}
              </a>
            </li>
          </ul>
        )}
      </header>

      <header className="hidden md:flex w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] my-5 mx-auto justify-between items-center">
        <img src={LogoDesktop} alt="Logo 01-bit" className="w-[118px] h-12" />

        <div className="flex items-center justify-between gap-10 md840px:gap-20 lg:gap-60 xl:gap-80">
          <nav className="flex items-center justify-center flex-grow">
            <ul className="flex gap-5 lg:gap-10">
              <li>
                <a
                  href="#home"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  {translations[language].home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  {translations[language].about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  {translations[language].services}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  {translations[language].projects}
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#contact"
            className="bg-primary-01 py-3 px-5 text-otherColors-01 text-md rounded-3xl hover:bg-primary-03 font-medium"
          >
            {translations[language].contact}
          </a>
        </div>
      </header>

      {showScrollTopButton && (
        <>
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center z-10"
            title="Go to top"
          >
            <ArrowUpCircle size={32} className="text-otherColors-01" />
          </button>
        </>
      )}
    </>
  );
};

export default Header;
