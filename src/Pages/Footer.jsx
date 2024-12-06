import { EmailButtonLink, InstagramButtonLink, LinkedinButtonLink } from '../Components/SocialMedias';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 bg-grayColors-01 grid grid-cols-1 items-center justify-center gap-[10px]">
      <div className="flex justify-center items-center gap-2 text-secondary-02">
        ©
        <span className="font-normal text-base">Todos os direitos reservados</span>
      </div>
      <div className="flex lg:hidden items-center justify-center gap-2 text-primary-02">
        <LinkedinButtonLink  />
        <InstagramButtonLink/>
        <EmailButtonLink />
      </div>
    </footer>
  );
};

export default Footer;
