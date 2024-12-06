import { useState, useEffect, useRef } from 'react';
import LogoDesktop from '../assets/desktop/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { Menu, X } from 'react-feather';
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
          <header className="mt-0 py-5 mx-5 flex md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:pt-3 md:pb-2 md:mx-auto justify-between items-center bg-otherColors-01 ">
            <a href="#" className="md:hidden">
              <img src={LogoMobile} alt="Logo 01-bit" />
            </a>

            <span
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-expanded={isOpen}
              aria-controls="navigation_bar"
            >
              {isOpen ? (
                <X className="text-secondary-01 cursor-pointer" size={40} />
              ) : (
                <Menu className="text-secondary-01 cursor-pointer" size={40} />
              )}
            </span>
            <a href="#" className="hidden md:block">
              <img
                src={LogoDesktop}
                alt="Logo 01-bit"
                className="w-[118px] h-12"
              />
            </a>

            {/*navbar mobile */}
            <ul
              aria-hidden={!isOpen}
              id="navigation_bar"
              className={`md:hidden flex-col items-start justify-start gap-6 absolute top-[100%] left-0 w-full  bg-otherColors-01 z-[-1] animate-fade-down animate-duration-[400ms] animate-delay-200 animate-ease-in-out pl-5 pt-8 transform-[-353px]  ${
                isOpen ? 'flex' : 'hidden'
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
            </ul>

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
        <>
          <button
            onClick={scrollToTop}
            className="fixed 
            aria-label=bottom-5 right-5 bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center z-10"
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
