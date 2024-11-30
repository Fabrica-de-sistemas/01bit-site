import { useState, useEffect } from 'react';
import LogoDesktop from '../assets/desktop/logo.svg';
import LogoMobile from '../assets/mobile/logo/logo.svg';
import { Menu } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';

const Header = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

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
      {/* Header mobile */}
      <header className="md:hidden mt-5 mx-5 flex justify-between items-center relative">
        <img src={LogoMobile} alt="Logo 01-bit" />
        <input type="checkbox" className="hidden" name="check" id="menu" />
        <label htmlFor="menu">
          <Menu className="text-secondary-01 cursor-pointer" size={40} />
        </label>
        <ul className="flex-col items-center justify-center gap-6 absolute top-[100%] right-1 w-[80%] h-[353px] bg-otherColors-01 rounded-lg shadow-boxShadow hidden z-50">
          <li>
            <a
              className="text-xl text-secondary-01 font-medium hover:text-primary-02"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
            <a href="#about">About</a>
          </li>
          <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
            <a href="#services">Services</a>
          </li>
          <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </header>

      {/* Header desktop */}
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
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#contact"
            className="bg-primary-01 py-3 px-5 text-otherColors-01 text-md rounded-3xl hover:bg-primary-03 font-medium"
          >
            Contact Us
          </a>
        </div>
      </header>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center z-10"
          title="Go to top"
        >
          <ArrowUpCircle size={32} className="text-otherColors-01" />
        </button>
      )}
    </>
  );
};

export default Header;
