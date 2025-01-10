import { useState, useEffect } from 'react';
import Logo from '../assets/imgs/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { ArrowUpCircle} from 'react-feather';
import { Tooltip } from '@mui/material';
import BurguerMenu from '../Components/BurguerMenu';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
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

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        <section className="relative">
          <div className="mt-0 px-3 lg:px-5 md:py-5 flex md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto justify-between items-center">
            <a href="#" className="md:hidden select-none ml-[12px]">
              <img
                src={LogoMobile}
                alt="Logo 01-bit"
                className="text-secondary-01"
              />
            </a>
            <a href="#" className="hidden md:flex select-none">
              <img
                src={Logo}
                alt="Logo 01-bit"
                className="w-[119px] lg:w-[124px] h-12 lg:ml-[-20px] "
              />
            </a>
            <BurguerMenu
              onClick={() => setIsOpen(!isOpen)}
              className={` burger-menu md:hidden ${isOpen ? 'active' : ''}`}
              aria-expanded={isOpen}
              aria-controls="navigation_bar"
            />

            <nav
              aria-hidden={!isOpen}
              className={`md:hidden flex flex-col items-center justify-center gap-6 absolute top-[100%] left-0 w-full transition-all duration-[800ms] z-[-1] pl-5 p-5 ${
                isOpen ? '-translate-y-0' : '-translate-y-[353px]'
              }`}
            >
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                >
                  {t('header.home')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  {t('header.about')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                >
                  {t('header.services')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-xl text-black font-medium hover:text-primary-02 text-center transition duration-300 select-none"
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, '#projects')}
                >
                  {t('header.projects')}
                </a>
              </li>
              <li onClick={handleCloseMenu}>
                <a
                  className="text-lg text-otherColors-01 py-2 px-2 bg-primary-01 rounded-xl border-secondary-01 font-medium hover:bg-primary-02 text-center transition duration-300 select-none ml-[-3px]"
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  {t('header.contact')}
                </a>
              </li>
              <div className={`${isOpen ? 'flex' : 'hidden'} flex-row gap-2 `}>
                <Tooltip title="Português" arrow placement="left">
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className="rounded-full  transition duration-300 flex items-center justify-center w-8 h-8 border-none"
                  >
                    <Flag
                      code="BR"
                      alt="Bandeira do Brasil"
                      className="w-7 h-7 object-cover rounded-full"
                      style={{ filter: 'none', color: 'inherit' }}
                    />
                  </button>
                </Tooltip>
                <Tooltip title="English" arrow placement="left">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="rounded-full transition duration-300 flex items-center justify-center w-8 h-8 border-none"
                  >
                    <Flag
                      code="US"
                      alt="Bandeira dos EUA"
                      className="w-7 h-7 object-cover rounded-full"
                      style={{ filter: 'none', color: 'inherit' }}
                    />
                  </button>
                </Tooltip>
              </div>
            </nav>

            <nav
              className="hidden md:flex items-center justify-between gap-4 lg:gap-10 xl:gap-40
            "
            >
              <ul className="flex items-center justify-center flex-grow gap-5 lg:gap-10">
                <li>
                  <a
                    href="#home"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                    onClick={(e) => handleLinkClick(e, '#home')}
                  >
                    {t('header.home')}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                    onClick={(e) => handleLinkClick(e, '#about')}
                  >
                    {t('header.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                    onClick={(e) => handleLinkClick(e, '#services')}
                  >
                    {t('header.services')}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-lg text-white font-medium hover:text-primary-02 cursor-pointer transition duration-300 select-none"
                    onClick={(e) => handleLinkClick(e, '#projects')}
                  >
                    {t('header.projects')}
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-1 xl:gap-2">
                <a
                  href="#contact"
                  className="bg-primary-01 py-2 px-4 text-otherColors-01 text-md rounded-3xl hover:bg-primary-03 hover:text-otherColors-01 font-medium transition duration-300 select-none cursor-pointer"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  {t('header.contact')}
                </a>

                <div className="flex items-center justify-center">
                  <Tooltip title="Português" arrow>
                    <button
                      onClick={() => handleLanguageChange('pt')}
                      className="p-2 rounded-full transition duration-300 flex items-center justify-center w-12 h-12 border-none"
                    >
                      <Flag
                        code="BR"
                        alt="Bandeira do Brasil"
                        className="w-8 h-8 object-cover rounded-full"
                        style={{ filter: 'none', color: 'inherit' }}
                      />
                    </button>
                  </Tooltip>
                  <Tooltip title="English" arrow>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="p-2 rounded-full transition duration-300 flex items-center justify-center w-12 h-12 border-none"
                    >
                      <Flag
                        code="US"
                        alt="Bandeira dos EUA"
                        className="w-8 h-8 object-cover rounded-full"
                        style={{ filter: 'none', color: 'inherit' }}
                      />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>
      {showScrollTopButton && (
        <Tooltip title={t('header.top')} arrow placement="left">
          <button
            className="fixed bottom-6 right-6 p-3 bg-primary-01 rounded-full shadow-lg z-20 hover:bg-primary-02 transition duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUpCircle size={24} stroke="#fff" />
          </button>
        </Tooltip>
      )}
    </>
  );
};

export default Header;
