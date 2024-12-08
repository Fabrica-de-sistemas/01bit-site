import Image01Mobile from '../assets/mobile/images/image_1.png';
import Image02Mobile from '../assets/mobile/images/image_2.png';
import Image03Mobile from '../assets/mobile/images/image_3.png';
import ScrollReveal from 'scrollreveal';

import Image01 from '../assets/imgs/Image01.webp';
import Image02 from '../assets/imgs/Image02.webp';
import Image03 from '../assets/imgs/Image03.webp';
import {
  EmailButtonLink,
  InstagramButtonLink,
  LinkedinButtonLink,
} from '../Components/SocialMedias';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
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
      };

      ScrollReveal().reveal(card, config);
    });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col justify-end mt-20 px-10 max-w-[540px] mx-auto lg:max-w-[1040px] lg:flex-row lg:items-center lg:justify-center lg:gap-16"
    >
      <div
        id="mobile"
        className="flex lg:hidden flex-row-reverse items-start gap-5"
      >
        <div>
          <img
            className="mb-5 select-none card fall"
            src={Image01Mobile}
            alt="Perfil image"
          />
          <img
            className="select-none card rise"
            src={Image03Mobile}
            alt="Perfil image"
          />
        </div>
        <div className="self-center select-none card rise">
          <img src={Image02Mobile} alt="Perfil image" />
        </div>
      </div>
      <div
        id="desktop"
        className="hidden lg:flex items-start justify-end gap-8"
      >
        <div>
          <img
            className="mb-5 rounded-3xl max-w-[234px] h-[335px] select-none card fall"
            src={Image02}
            alt="Perfil image"
          />
          <img
            className="rounded-3xl max-w-[234px] h-[335px] select-none card rise"
            src={Image03}
            alt="Perfil image"
          />
        </div>
        <div className="self-start mt-28 select-none card rise">
          <img
            className="rounded-3xl max-w-[234px] h-[436px]"
            src={Image01}
            alt="Perfil image"
          />
        </div>
      </div>
      <div>
        <h2 className="text-left font-bold text-[28px] text-secondary-01 mb-5 select-none">
          Sobre Nós
        </h2>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01 select-none">
          Na 01-bit, somos apaixonados por transformar ideias em soluções
          digitais únicas. Nossa equipe de especialistas trabalha de perto com
          você para projetar, desenvolver e implementar soluções personalizadas
          que fazem a diferença. Com uma abordagem inovadora e criativa, estamos
          envolvidos em cada etapa — desde o design de experiência do usuário
          até o desenvolvimento front-end e back-end, passando pela
          infraestrutura.
        </p>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01 mt-3 select-none">
          Estamos comprometidos em levar sua visão ao próximo nível, combinando
          tecnologia de ponta com criatividade para criar um futuro digital
          impactante.
        </p>
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
