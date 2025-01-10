import { motion } from 'framer-motion';
import { ArrowDown } from 'react-feather';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';
import RobotMobile from '../assets/mobile/logo/Robot.svg';
import Robot from '../assets/imgs/Robot.svg';
import HeroParticles from '../Components/HeroParticles';

const Home = () => {
  const { t } = useTranslation();
  const homeRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false); // Controle de renderização

  useEffect(() => {
    const leftArticle = document.querySelectorAll('#home .left');

    const baseConfig = {
      duration: 1000,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      opacity: 0,
    };

    leftArticle.forEach((article) => {
      ScrollReveal().reveal(article, { ...baseConfig, origin: 'left' });
    });

    // rightArticle.forEach((article) => {
    //   ScrollReveal().reveal(article, { ...baseConfig, origin: 'right' });
    // });
  }, []);

  // Exibe a mensagem no console e ativa a renderização
  useEffect(() => {
    setIsRendered(true);
  }, []); // Executa apenas na montagem do componente

  return (
    <section
      id="home"
      className="mt-28 mx-10 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between "
    >
      <div ref={homeRef} className="w-[164px] mb-5 md:hidden select-none">
        <img src={RobotMobile} alt="Robô mascote" />
      </div>
      <section className="flex items-center justify-center gap-10 xl:gap-56 md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto">
        <article className="grid justify-center items-center text-center md:text-left md:content-center md:justify-items-start md:mt-8 left">
          <h1 className="text-3xl max-w-[380px] md:w-[800px] lg:max-w-[500px] mx-auto lg:text-4xl leading-8 lg:leading-[3rem] font-bold text-black  md:mx-0 mb-5 md:mb-8 select-none">
            {t('home.heading')}
          </h1>
          <p className="text-[13px] md:hidden leading-6 font-normal text-black max-w-[300px] mx-auto mb-10 select-none">
            {t('home.description_mobile')}
          </p>
          <p className="hidden md:flex text-base lg:text-lg leading-7 font-normal text-black mx-auto max-w-[780px] lg:max-w-[680px] mb-12 select-none">
            {t('home.description_desktop')}
          </p>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal text-nowrap select-none"
          >
            {t('home.cta')}
            <motion.span
              aria-hidden
              animate={{ y: [0, 3, 0] }}
              initial={{ y: 0 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <ArrowDown
                aria-hidden
                size={30}
                strokeWidth={1.5}
                className="hidden md:block text-otherColors-01 "
              />
            </motion.span>
          </a>
        </article>

        <article className="hidden md:flex right">
          {/* Renderiza HeroParticles somente após isRendered ser true */}
          {isRendered && <HeroParticles />}
          <img
            src={Robot}
            alt="Robô mascote"
            className="h-full object-cover object-center"
          />
        </article>
      </section>
    </section>
  );
};

export default Home;
