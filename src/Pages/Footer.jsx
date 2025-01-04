import {
  EmailButtonLink,
  InstagramButtonLink,
  LinkedinButtonLink,
} from '../Components/SocialMedias';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 grid grid-cols-1 items-center justify-center gap-[10px]">
      <div className="flex justify-center items-center gap-2 select-none text-secondary-01">
        ©
        <span className="font-normal text-base select-none text-secondary-01">
          Todos os direitos reservados
        </span>
      </div>
      <div className="flex lg:hidden items-center justify-center gap-2 text-primary-02">
        <LinkedinButtonLink className="select-none" />
        <InstagramButtonLink className="select-none" />
        <EmailButtonLink className="select-none" />
      </div>
    </footer>
  );
};

export default Footer;
