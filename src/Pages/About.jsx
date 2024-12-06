import Image01Mobile from '../assets/mobile/images/image_1.png';
import Image02Mobile from '../assets/mobile/images/image_2.png';
import Image03Mobile from '../assets/mobile/images/image_3.png';

import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import { Instagram } from 'react-feather';

import Image01Desktop from '../assets/desktop/Image01.png';
import Image02Desktop from '../assets/desktop/Image02.png';
import Image03Desktop from '../assets/desktop/Image03.png';
import { useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSection = document.querySelector('#about');

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
            className="mb-5 animate-duration-[900ms] animate-delay-200 animate-ease-in-out"
            src={Image01Mobile}
            alt="Perfil image"
          />
          <img
            src={Image03Mobile}
            alt="Perfil image"
            className="animate-fade-up animate-duration-[900ms] animate-delay-200 animate-ease-in-out"
          />
        </div>
        <div className="self-center animate-fade-down animate-duration-[900ms] animate-delay-200 animate-ease-in-out">
          <img src={Image02Mobile} alt="Perfil image" />
        </div>
      </div>
      <div
        id="desktop"
        className="hidden lg:flex items-start justify-end gap-8"
      >
        <div>
          <img
            className="mb-5 rounded-3xl max-w-[234px] h-[335px] animate-fade-down animate-duration-[900ms] animate-delay-200 animate-ease-in-out"
            src={Image02Desktop}
            alt="Perfil image"
          />
          <img
            className="rounded-3xl max-w-[234px] h-[335px] animate-fade-up animate-duration-[900ms] animate-delay-200 animate-ease-in-out"
            src={Image03Desktop}
            alt="Perfil image"
          />
        </div>
        <div className="self-start mt-28 animate-fade-up animate-duration-[900ms] animate-delay-200 animate-ease-in-out">
          <img
            className="rounded-3xl max-w-[234px] h-[436px]"
            src={Image01Desktop}
            alt="Perfil image"
          />
        </div>
      </div>
      <div>
        <h2 className="text-left font-bold text-[28px] text-secondary-01 mb-5">
          Sobre Nós
        </h2>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01">
          Na 01-bit, somos apaixonados por transformar ideias em soluções
          digitais únicas. Nossa equipe de especialistas trabalha de perto com
          você para projetar, desenvolver e implementar soluções personalizadas
          que fazem a diferença. Com uma abordagem inovadora e criativa, estamos
          envolvidos em cada etapa — desde o design de experiência do usuário
          até o desenvolvimento front-end e back-end, passando pela
          infraestrutura.
        </p>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01 mt-3">
          Estamos comprometidos em levar sua visão ao próximo nível, combinando
          tecnologia de ponta com criatividade para criar um futuro digital
          impactante.
        </p>
        <div className="flex items-center justify-start gap-2 mt-5">
          <a href="">
            <Linkedin
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01"
            />
          </a>
          <a href="">
            <Mail
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01"
            />
          </a>
          <a href="">
            <Instagram
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-primary-02 hover:text-primary-01"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
