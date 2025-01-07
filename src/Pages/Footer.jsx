import { useTranslation } from 'react-i18next';

// import {
//   EmailButtonLink,
//   InstagramButtonLink,
//   LinkedinButtonLink,
// } from '../Components/SocialMedias';



const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 py-8 grid grid-cols-1 items-center justify-center gap-[10px]">
      <div className="flex justify-center items-center gap-2 select-none text-primary-text">
        ©
        <span className="font-normal text-base select-none">
          {t("footer.rightsReserved")}
        </span>
      </div>
      <div className="flex lg:hidden items-center justify-center gap-2 text-primary-02">
        {/* <LinkedinButtonLink className="select-none" />
        <InstagramButtonLink className="select-none" />
        <EmailButtonLink className="select-none" /> */}
      </div>
    </footer>
  );
};

export default Footer;
