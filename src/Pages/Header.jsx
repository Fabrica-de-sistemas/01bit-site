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
    contact: 'Solicite um orçamento',
  },
};

const Header = () => {
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

  return (
    <>
      <header className="md:hidden mt-5 mx-5 flex justify-between items-center relative">
        <img src={LogoMobile} alt="Logo 01-bit" />
        <input type="checkbox" className="hidden" name="check" id="menu" />
        <label htmlFor="menu">
          <Menu className="text-secondary-01 cursor-pointer" size={40} />
        </label>
        <ul
          ref={menuRef}
          className="flex flex-col items-center justify-center gap-6 absolute top-[100%] right-1 w-[80%] h-[353px] bg-otherColors-01 rounded-lg shadow-boxShadow z-50"
        >
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
              href="#home"
            >
              {translations[language].home}
            </a>
          </li>
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
              href="#about"
            >
              {translations[language].about}
            </a>
          </li>
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
              href="#services"
            >
              {translations[language].services}
            </a>
          </li>
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
              href="#projects"
            >
              {translations[language].projects}
            </a>
          </li>
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02 text-center"
              href="#contact"
            >
              {translations[language].contact}
            </a>
          </li>
        </ul>
      </header>

      <div className="hidden md:block bg-otherColors-01 w-full fixed top-0 left-0 right-0  z-10">
        <header className="hidden md:flex w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] pt-3 pb-2 mx-auto justify-between items-center">
          <a href="#">
            <img
              src={LogoDesktop}
              alt="Logo 01-bit"
              className="w-[118px] h-12"
            />
          </a>

          <div className="flex items-center justify-between gap-8 xl:gap-32">
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
      </div>

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
