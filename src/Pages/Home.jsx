import { motion } from 'framer-motion';
import RobotMobile from '../assets/mobile/logo/Robot.svg';
import RobotDesktop from '../assets/desktop/Robot.svg';
import { ArrowDown } from 'react-feather';

const Home = () => {
  return (
    <section
      id="home"
      className="mt-28 mx-10 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between"
    >
      <div className="w-[164px] mb-5 md:hidden">
        <img src={RobotMobile} alt="Imagem do robô" />
      </div>
      <div className="flex items-center justify-center gap-10 xl:gap-56 md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto">
        <div className="grid justify-center items-center text-center md:text-left md:content-center md:justify-items-start md:mt-8 animate-fade-right animate-duration-[900ms] animate-delay-200 animate-ease-in-out">
          <h1 className="text-3xl max-w-[380px] md:w-[800px] lg:max-w-[500px] mx-auto lg:text-4xl leading-8 lg:leading-[3rem] font-bold text-secondary-01  md:mx-0 mb-5 md:mb-8">
            Transformando Ideias em Soluções Inovadoras
          </h1>
          <p className="text-[13px] md:text-base lg:text-lg leading-6 md:leading-7 font-normal text-secondary-01 max-w-[300px] mx-auto md:max-w-[780px] lg:max-w-[680px] mb-10 md:mb-12">
            Criamos software inteligente e personalizado que conecta
            criatividade com tecnologia de ponta.
          </p>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal text-nowrap"
          >
            Solicite um orçamento
            <motion.span
              animate={{ y: [0, 3, 0] }}
              initial={{ y: 0 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <ArrowDown
                size={30}
                strokeWidth={1.5}
                className="hidden md:block text-otherColors-01 "
              />
            </motion.span>
          </a>
        </div>
        <div className="hidden md:flex ">
          <img
            src={RobotDesktop}
            alt="Imagem do robô"
            className="h-full object-cover object-center animate-fade-left animate-duration-[900ms] animate-delay-200 animate-ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
