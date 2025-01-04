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
          reset: false, // As animações não "resetam"
          afterReveal: () => {
            card.style.opacity = 1; // Garante que os elementos permaneçam visíveis
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
            revealCards(); // Executa a animação quando a seção entra no viewport
            observer.disconnect(); // Remove o observer para evitar repetição
          }
        });
      },
      { threshold: 0.1 }, // Percentual visível para disparar a animação
    );

    if (aboutSection) observer.observe(aboutSection);

    return () => {
      observer.disconnect(); // Limpa o observer ao desmontar
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col mt-20 px-10 max-w-[540px] mx-auto xl:max-w-[1040px] xl:flex-row xl:gap-16"
    >
      <div className="card global flex flex-col xl:flex-row xl:items-center xl:justify-center md:gap-4 lg:gap-8">
        {/* <div className=" grid-cols-2 gap-4 md:w-2/3 lg:w-2/3 hidden md:grid">
          <div>
            <img
              src="src/assets/imgs/Image01.png"
              alt="Foto 1"
              className="w-full h-[200px] md:h-[230px] lg:h-[280px] rounded-md"
            />
            <img
              src="src/assets/imgs/Image02.png"
              alt="Foto 2"
              className="w-full h-[200px] md:h-[230px] lg:h-[280px] rounded-md"
            />
          </div>
          <div>
            <img
              src="src/assets/imgs/Image03.png"
              alt="Foto grande"
              className="w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-md mt-12"
            />
          </div>
        </div> */}

        <div
          id="mobile"
          className="flex xl:hidden flex-row-reverse items-start gap-5"
        >
          <div>
            <img
              className="mb-5 w-[165px] h-[235px] lg:w-[234px] lg:h-[300px]"
              src="src/assets/imgs/Image01.png"
              alt="Perfil image"
            />
            <img
              src="src/assets/imgs/Image03.png"
              alt="Perfil image"
              className="max-w-[234px] h-[235px] lg:h-[300px]"
            />
          </div>
          <div className="self-center ">
            <img
              src="src/assets/imgs/Image02.png"
              alt="Perfil image"
              className="max-w-[234px] h-[235px] lg:h-[300px]"
            />
          </div>
        </div>
        <div
          id="desktop"
          className="hidden xl:flex items-start justify-end gap-8"
        >
          <div>
            <img
              className="mb-5 rounded-3xl max-w-[234px] h-[335px]"
              src="src/assets/imgs/Image02.png"
              alt="Perfil image"
            />
            <img
              className="rounded-3xl max-w-[234px] h-[335px]"
              src="src/assets/imgs/Image03.png"
              alt="Perfil image"
            />
          </div>
          <div className="self-start mt-28">
            <img
              className="rounded-3xl max-w-[234px] h-[436px]"
              src="src/assets/imgs/Image01.png"
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
