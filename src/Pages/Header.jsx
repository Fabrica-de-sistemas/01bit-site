import Logo from '../assets/mobile/logo/logo.svg';
import { Menu } from 'react-feather';
const Header = () => {
  return (
    <header className="mt-5 mx-5 flex justify-between items-center relative">
      <img src={Logo} alt="Logo 01-bit" />
      <input type="checkbox" className="hidden" name="check" id="menu" />
      <label htmlFor="menu">
        <Menu className="text-secondary-01 cursor-pointer" size={40} />
      </label>
      <ul className="flex-col items-center justify-center gap-6 absolute top-[100%] right-1 w-[80%] h-[353px] bg-otherColors-01 rounded-lg shadow-boxShadow hidden z-50">
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
          Home
        </li>
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
          About
        </li>
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
          Services
        </li>
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
          Projects
        </li>
        <li className="text-xl text-secondary-01 font-medium hover:text-primary-02">
          Contact Us
        </li>
      </ul>
    </header>
  );
};

export default Header;
