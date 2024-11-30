import RobotMobile from '../assets/mobile/logo/Robot.svg';
import RobotDesktop from '../assets/desktop/Robot.svg';
import { ArrowRight } from 'react-feather';

const Home = () => {
  return (
    <section
      id="home"
      className="mt-10 mx-10 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between"
    >
      <div className="w-[164px] mb-5 md:hidden">
        <img src={RobotMobile} alt="Imagem do robô" />
      </div>
      <div className="flex items-center justify-center gap-10 xl:gap-56 md:w-[720px] md840px:w-[790px] lg:w-[980px] xl:w-[1230px] md:mx-auto">
        <div className="grid justify-center items-center text-center md:text-left md:content-center md:justify-items-start md:mt-8">
          <h1 className="text-3xl max-w-[380px] md:w-[800px] lg:w-[500px] mx-auto lg:text-4xl leading-8 lg:leading-[3rem] font-bold text-secondary-01  md:mx-0 mb-5 md:mb-8">
            Turning Ideas into Innovative Solutions
          </h1>
          <p className="text-[13px] md:text-base lg:text-lg leading-6 md:leading-7 font-normal text-secondary-01 max-w-[300px] mx-auto md:max-w-[780px] lg:max-w-[580px] mb-10 md:mb-12">
            We build smart, tailored software that connects creativity with
            cutting-edge technology. From design to front end, back end, and
            infrastructure, we&apos;re here to take your vision to the next
            level. Join us in shaping the digital future.
          </p>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal"
          >
            Contact Us
            <ArrowRight
              size={30}
              strokeWidth={1.5}
              className="hidden md:block text-otherColors-01 "
            />
          </a>
        </div>
        <div className="hidden md:flex ">
          <img
            src={RobotDesktop}
            alt="Imagem do robô"
            className="h-full object-cover object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
