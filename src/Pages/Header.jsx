import Logo from '../assets/mobile/logo/logo.svg';
import { Menu } from 'react-feather';
const Header = () => {
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
        </li>
      </ul>
    </header>
  );
};

export default Header;
