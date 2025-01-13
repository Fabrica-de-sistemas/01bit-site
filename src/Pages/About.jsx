import ScrollReveal from 'scrollreveal';

import {
  EmailButtonLink,
} from '../Components/SocialMedias';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '/src/assets/imgs/Image01.png';
import img2 from '/src/assets/imgs/Image02.png';
import img3 from '/src/assets/imgs/Image03.png';

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
          // reset: false, // A animação não se repete
          afterReveal: () => {
            card.style.opacity = '1'; // Garante visibilidade final
          },
        };

        ScrollReveal().reveal(card, config);
      });
    };

    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealCards(); // Executa animações
            observer.disconnect(); // Evita repetição
          }
        });
      },
      { threshold: 0.1 }, // Dispara quando 10% da seção está visível
    );

    if (aboutSection) observer.observe(aboutSection);

    return () => {
      observer.disconnect(); // Limpa observer ao desmontar
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col mt-20 px-10 max-w-[540px] mx-auto xl:max-w-[1040px] xl:flex-row xl:gap-16 "
    >
      <div className="card global flex flex-col xl:flex-row xl:items-center xl:justify-center md:gap-4 lg:gap-8">
        <div
          id="mobile"
          className="flex md:hidden flex-row-reverse items-start gap-3"
        >
          
        </div>
        <div
          id="desktop"
          className="hidden xl:flex items-start justify-end gap-3"
        >
          <div>
            <img
              className="card fall mb-5 rounded-3xl max-w-[234px] h-[335px]"
              src={img1}
              alt="Perfil image"
            />
            <img
              className="card rise rounded-3xl max-w-[234px] h-[335px]"
              src={img2}
              alt="Perfil image"
            />
          </div>
          <div className="self-start mt-28">
            <img
              className="card rise rounded-3xl max-w-[234px] h-[436px]"
              src={img3}
              alt="Perfil image"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2 bg-gray-200 p-2 rounded-md mt-4">
          <h2 className="text-start font-bold text-[28px] mb-5 select-none">
            {t('about.title')}
          </h2>
          <p className="font-normal text-[13px] leading-6 select-none">
            {t('about.paragraph1')}
          </p>
          <p className="font-normal text-[13px] leading-6 mt-3 select-none">
            {t('about.paragraph2')}
          </p>
          <div className="flex items-center justify-start gap-2 mt-5">
            {/* <LinkedinButtonLink
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
            /> */}
            <EmailButtonLink
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
            />
            {/* <InstagramButtonLink
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01 select-none"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
