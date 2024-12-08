import { motion } from 'framer-motion';
import RobotMobile from '../assets/mobile/logo/Robot.svg';
import Robot from '../assets/imgs/Robot.svg';
import { ArrowDown } from 'react-feather';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  const homeRef = useRef(null);
  useEffect(() => {
    const leftArticle = document.querySelectorAll('#home .left'); // Seleciona as Article que vêm da esquerda
    const rightArticle = document.querySelectorAll('#home .right'); // Seleciona as Article que vêm da direita

    const baseConfig = {
      duration: 1000,
      distance: '50px', // Distância do deslocamento
      scale: 1,
      easing: 'ease',
      opacity: 0, // Começa invisível
    };

    // Configurações para as Article que vêm da esquerda
    leftArticle.forEach((article) => {
      const config = {
        ...baseConfig,
        origin: 'left', // Vem do lado esquerdo
      };

      ScrollReveal().reveal(article, config);
    });

    // Configurações para as Article que vêm da direita
    rightArticle.forEach((article) => {
      const config = {
        ...baseConfig,
        origin: 'right', // Vem do lado direito
      };

      ScrollReveal().reveal(article, config);
    });
  }, []);

  return (
    <section
      id="home"
      className="mt-28 mx-10 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between"
    >
      <div ref={homeRef} className="w-[164px] mb-5 md:hidden select-none">
        <img src={RobotMobile} alt="Robô mascote" />
      </div>
      <section className="flex items-center justify-center gap-10 xl:gap-56 md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto">
        <article className="grid justify-center items-center text-center md:text-left md:content-center md:justify-items-start md:mt-8 left">
          <h1 className="text-3xl max-w-[380px] md:w-[800px] lg:max-w-[500px] mx-auto lg:text-4xl leading-8 lg:leading-[3rem] font-bold text-secondary-01  md:mx-0 mb-5 md:mb-8 select-none">
            Transformando Ideias em Soluções Inovadoras
          </h1>
          <p className="text-[13px] md:hidden leading-6 font-normal text-secondary-01 max-w-[300px] mx-auto   mb-10 select-none">
            Criamos software inteligente e personalizado que conecta
            criatividade com tecnologia de ponta.
          </p>
          <p className=" hidden md:flex text-base lg:text-lg  leading-7 font-normal text-secondary-01  mx-auto max-w-[780px] lg:max-w-[680px] mb-12 select-none">
            Criamos software inteligente e personalizado que conecta
            criatividade com tecnologia de ponta. Do design ao front-end,
            back-end e infraestrutura, estamos aqui para levar sua visão para o
            próximo nível. Junte-se a nós na construção do futuro digital.
          </p>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal text-nowrap select-none"
          >
            Inicie seu projeto agora
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
