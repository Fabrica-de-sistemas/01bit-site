import { Linkedin, Instagram, Mail } from 'react-feather';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 bg-grayColors-01 flex flex-col items-center justify-center gap-4">
      <div className="flex justify-center items-center gap-2 text-secondary-02">
        <span>©</span>
        <p className="font-normal text-base">Todos os direitos reservados</p>
      </div>
      <div className="flex justify-center items-center gap-5 text-primary-02">
        <Linkedin className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Mail className="cursor-pointer" />
      </div>
    </footer>

  );
};

export default Footer;
>>>>>>> feature/desktop-version
