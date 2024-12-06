import { useState, useEffect, useRef } from 'react';
import LogoDesktop from '../assets/desktop/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { Menu, X } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';
import { Tooltip } from '@mui/material';
import BurguerMenu from '../Components/BurguerMenu';

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
    contact: 'Solicite um orçamento',
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [language, setLanguage] = useState('pt');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-otherColors-01 w-full fixed top-0 left-0 right-0  z-50">
        <div className="relative">
          <header className="mt-0 p-5 flex md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto justify-between items-center bg-otherColors-01 ">
            <a href="#" className="md:hidden">
              <img src={LogoMobile} alt="Logo 01-bit" />
            </a>

            <BurguerMenu onClick={() => setIsOpen(!isOpen)}
              className={"md:hidden " + (isOpen ? "active" : "")} 
              aria-expanded={isOpen}
              aria-controls="navigation_bar" /> 
            <a href="#" className="hidden md:block">
              <img
                src={LogoDesktop}
                alt="Logo 01-bit"
                className="w-[118px] h-12"
              />
            </a>

            {/*navbar mobile */}
            <nav
              aria-hidden={!isOpen}
              
              className={`md:hidden flex flex-col items-start justify-start gap-6 absolute top-[100%] left-0 w-full transition-all duration-[800ms]  bg-otherColors-01 z-[-1] pl-5 ${
                isOpen ? '-translate-y-0' : '-translate-y-[353px]'
              }`}
            >
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center transition duration-300"
                  href="#home"
                >
                  {translations[language].home}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center transition duration-300"
                  href="#about"
                >
                  {translations[language].about}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center transition duration-300"
                  href="#services"
                >
                  {translations[language].services}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center transition duration-300"
                  href="#projects"
                >
                  {translations[language].projects}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-lg text-otherColors-01 py-2 px-2 bg-primary-01 rounded-xl border-secondary-01 font-medium hover:bg-primary-02 text-center transition duration-300 ml-[-3px]"
                  href="#contact"
                >
                  {translations[language].contact}
                </a>
              </li>
            </nav>

            {/*navbar desktop */}
            <div className="hidden md:flex items-center justify-between gap-8 xl:gap-32">
              <nav className="flex items-center justify-center flex-grow">
                <ul className="flex gap-5 lg:gap-10">
                  <li>
                    <a
                      href="#home"
                      className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer transition duration-300"
                    >
                      {translations[language].home}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer transition duration-300"
                    >
                      {translations[language].about}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer transition duration-300"
                    >
                      {translations[language].services}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer transition duration-300"
                    >
                      {translations[language].projects}
                    </a>
                  </li>
                </ul>
              </nav>

              <a
                href="#contact"
                className="bg-primary-01 py-3 px-5 text-otherColors-01 text-md rounded-3xl hover:bg-primary-03 font-medium transition duration-300 cursor-pointer"
              >
                {translations[language].contact}
              </a>
            </div>
          </header>
        </div>
      </div>

      {showScrollTopButton && (
        <Tooltip title='Ir para o topo' arrow placement='left'>
          <button
            onClick={scrollToTop}
            className="fixed 
            bottom-5 right-5 bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center z-10"
          >
            <ArrowUpCircle size={32} className="text-otherColors-01" />
          </button>
        </Tooltip>
      )}
    </>
  );
};

export default Header;
