import Image01Mobile from '../assets/mobile/images/image_1.png';
import Image02Mobile from '../assets/mobile/images/image_2.png';
import Image03Mobile from '../assets/mobile/images/image_3.png';

import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import { Instagram } from 'react-feather';

import Image01Desktop from '../assets/desktop/Image01.png';
import Image02Desktop from '../assets/desktop/Image02.png';
import Image03Desktop from '../assets/desktop/Image03.png';

const About = () => {
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
          <img className="mb-5" src={Image01Mobile} alt="Perfil image" />
          <img src={Image03Mobile} alt="Perfil image" />
        </div>
        <div className="self-center">
          <img src={Image02Mobile} alt="Perfil image" />
        </div>
      </div>
      <div
        id="desktop"
        className="hidden lg:flex items-start justify-end gap-8"
      >
        <div>
          <img
            className="mb-5 rounded-3xl max-w-[234px] h-[335px]"
            src={Image02Desktop}
            alt="Perfil image"
          />
          <img
            className="rounded-3xl max-w-[234px] h-[335px]"
            src={Image03Desktop}
            alt="Perfil image"
          />
        </div>
        <div className="self-start mt-28">
          <img
            className="rounded-3xl max-w-[234px] h-[436px]"
            src={Image01Desktop}
            alt="Perfil image"
          />
        </div>
      </div>
      <div>
        <h2 className="text-left font-bold text-[28px] text-secondary-01 mb-5">
          About Us
        </h2>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01">
          At 01-bit, we are passionate about turning ideas into unique digital
          solutions. Our team of experts works closely with you to design,
          develop, and implement tailored solutions that make a difference. With
          an innovative and creative approach, we are involved in every step —
          from user experience design to front-end and back-end development, all
          the way to infrastructure.
        </p>
        <p className="text-left font-normal text-[13px] leading-6 text-secondary-01 mt-3">
          We are committed to bringing your vision to the next level, merging
          cutting-edge technology with creativity to create an impactful digital
          future.
        </p>
        <div className="flex items-center justify-start gap-2 mt-5">
          <Linkedin
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02"
          />
          <Mail
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02"
          />
          <Instagram
            size={30}
            strokeWidth={1.5}
            className="hidden md:block text-primary-02"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
