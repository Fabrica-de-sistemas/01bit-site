import { useState, useEffect } from "react";
import Logo from "../assets/desktop/logo.svg";
import { ArrowUpCircle } from "react-feather";

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
      <header className="mt-5 mx-10 flex justify-between items-center">
        <img src={Logo} alt="Logo 01-bit" className="w-20" />

        <nav className="flex justify-center flex-grow">
          <ul className="flex gap-8">
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
          className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-7 text-otherColors-01 text-md rounded-[10px] hover:bg-primary-03 font-medium"
        >
          Contact Us
        </a>
      </header>

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
