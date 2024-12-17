import ScrollReveal from 'scrollreveal';

import {
  EmailButtonLink,
  InstagramButtonLink,
  LinkedinButtonLink,
} from '../Components/SocialMedias';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const revealCards = () => {
      const cards = document.querySelectorAll('#about .card');

      cards.forEach((card, index) => {
        const isRise = card.classList.contains('rise');
        const isFall = card.classList.contains('fall');

        const config = {
          origin: isRise ? 'bottom' : isFall ? 'top' : 'bottom',
          duration: 1000,
          delay: 200 * index,
          distance: '50px',
          scale: 1,
          easing: 'ease',
          opacity: 0,
          reset: true,
        };

        ScrollReveal().reveal(card, config);
      });
    };
 
     revealCards();

    const interval = setInterval(revealCards, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col justify-end mt-20 px-10 max-w-[540px] mx-auto lg:max-w-[1040px] lg:flex-row lg:items-center lg:justify-center lg:gap-16"
    >
      {/* Adicione as classes rise ou fall nos cards */}
      <div className="card rise bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-left font-bold text-[28px] text-black mb-5 select-none">
          {t('about.title')}
        </h2>
        <p className="text-left font-normal text-[13px] leading-6 text-black select-none">
          {t('about.paragraph1')}
        </p>
        <p className="text-left font-normal text-[13px] leading-6 text-black mt-3 select-none">
          {t('about.paragraph2')}
        </p>
      </div>
      <div className="card fall bg-gray-200 p-4 rounded-md mb-4">
        <div className="flex items-center justify-start gap-2 mt-5">
          <LinkedinButtonLink
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
          />
          <EmailButtonLink
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
          />
          <InstagramButtonLink
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
