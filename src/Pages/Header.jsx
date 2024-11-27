import { useState, useEffect } from "react";
import DesktopLogo from "../assets/desktop/logo.svg";
import MobileLogo from "../assets/mobile/logo/logo.svg";
import { ArrowUpCircle, Menu } from "react-feather";

const Header = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="hidden md:flex mt-5 mx-10 justify-between items-center">
        <img src={DesktopLogo} alt="Logo 01-bit" className="w-20" />

        <nav className="flex justify-center flex-grow">
          <ul className="flex gap-8">
            <li>
              <a
                href="#home-desktop"
                className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-desktop"
                className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services-desktop"
                className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects-desktop"
                className="text-lg text-secondary-01 font-medium hover:text-primary-02 cursor-pointer"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#contact-desktop"
          className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-7 text-otherColors-01 text-md rounded-[10px] hover:bg-primary-03 font-medium"
        >
          Contact Us
        </a>
      </header>

      <header className="md:hidden mt-5 mx-5 flex justify-between items-center relative">
        <img src={MobileLogo} alt="Logo 01-bit" />
        <input type="checkbox" className="hidden" name="check" id="menu" />
        <label htmlFor="menu">
          <Menu className="text-secondary-01 cursor-pointer" size={40} />
        </label>
        <ul className="flex-col items-center justify-center gap-6 absolute top-[100%] right-1 w-[80%] h-[353px] bg-otherColors-01 rounded-lg shadow-boxShadow hidden z-50">
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
        <a href="#home">Home</a>
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

      {/* Botão de Voltar ao Topo */}
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary-02 text-white p-3 rounded-full shadow-lg hover:bg-primary-03 transition duration-300 flex items-center justify-center"
          title="Go to top"
        >
          <ArrowUpCircle size={32} />
        </button>
      )}
    </>
  );
};

export default Header;
