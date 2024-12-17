import { useState, useEffect } from 'react';
import Logo from '../assets/imgs/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { ArrowUpCircle } from 'react-feather';
import { Tooltip } from '@mui/material';
import BurguerMenu from '../Components/BurguerMenu';
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon } from 'react-icons/fa';
import Flag from 'react-world-flags';
import { useTheme } from "../ThemeProvider.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

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

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        <section className="relative">
          <header className="mt-0 px-3 md:px-5 md:py-5 flex md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto justify-between items-center">
            <a href="#" className="md:hidden select-none ml-[12px]">
              <img src={LogoMobile} alt="Logo 01-bit" />
            </a>

            <BurguerMenu
              onClick={() => setIsOpen(!isOpen)}
              className={`burger-menu md:hidden ${isOpen ? 'active' : ''}`}
              aria-expanded={isOpen}
              aria-controls="navigation_bar"
            />
            <a href="#" className="hidden md:flex select-none">
              <img
                src={Logo}
                alt="Logo 01-bit"
                className="w-[119px] lg:w-[124px] h-12 lg:ml-[-20px]"
              />
            </a>

            <nav
              aria-hidden={!isOpen}
              className={`md:hidden flex flex-col items-center justify-center gap-6 absolute top-[100%] left-0 w-full transition-all duration-[800ms] z-[-1] pl-5 p-5 ${isOpen ? '-translate-y-0' : '-translate-y-[353px]'
                }`}
            >
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#home"
                >
                  {t("header.home")}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#about"
                >
                  {t("header.about")}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#services"
                >
                  {t('header.services')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#projects"
                >
                  {t('header.projects')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-lg text-otherColors-01 py-2 px-2 bg-primary-01 rounded-xl border-secondary-01 font-medium hover:bg-primary-02 text-center transition duration-300 select-none ml-[-3px]"
                  href="#contact"
                >
                  {t('header.contact')}
                </a>
              </li>
            </nav>

            <nav className="hidden md:flex items-center justify-between gap-8 xl:gap-24">
              <ul className="flex items-center justify-center flex-grow gap-5 lg:gap-11">
                <li>
                  <a
                    href="#home"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                  >
                    {t('header.home')}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                  >
                    {t('header.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                  >
                    {t('header.services')}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                  >
                    {t('header.projects')}
                  </a>
                </li>
              </ul>

              <a
                href="#contact"
                className="bg-primary-01 py-3 px-5 text-otherColors-01 text-md rounded-3xl hover:bg-primary-03 font-medium transition duration-300 select-none cursor-pointer"
              >
                {t('header.contact')}
              </a>
            </nav>
          </header>
        </section>
      </header>

      <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-10 animate__animated animate__fadeInUp">
        {showScrollTopButton && (
          <Tooltip title="Ir para o topo" arrow placement="left">
            <button
              onClick={scrollToTop}
              className="bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center"
            >
              <ArrowUpCircle size={20} className="text-otherColors-01" />
            </button>
          </Tooltip>
        )}
        <div className="flex flex-col gap-2">
          <Tooltip title="Português" arrow placement="left">
            <button
              onClick={() => handleLanguageChange('pt')}
              className="bg-secondary-01 text-white p-2 rounded-full shadow-lg hover:bg-primary-01 transition duration-300 flex items-center justify-center w-12 h-12 border-none"
            >
              <Flag code="BR" alt="Bandeira do Brasil" className="w-full h-full object-cover rounded-full" />
            </button>
          </Tooltip>
          <Tooltip title="English" arrow placement="left">
            <button
              onClick={() => handleLanguageChange('en')}
              className="bg-secondary-01 text-white p-2 rounded-full shadow-lg hover:bg-primary-01 transition duration-300 flex items-center justify-center w-12 h-12 border-none"
            >
              <Flag code="US" alt="Bandeira dos EUA" className="w-full h-full object-cover rounded-full" />
            </button>
          </Tooltip>
          <Tooltip title={theme === "dark" ? "Modo claro" : "Modo escuro"} arrow placement="left">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="bg-white text-white p-3 rounded-full shadow-lg hover:bg-primary-01 transition duration-300"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </Tooltip>

        </div>
      </div>
    </>
  );
};

export default Header;
