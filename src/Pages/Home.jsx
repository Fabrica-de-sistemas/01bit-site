import Robot from '../assets/desktop/Robot.svg';
import Illustration from '../assets/mobile/logo/illustration.svg';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="mt-10 mx-[5%] flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-5"
      >
        <div className="flex flex-col justify-center items-start gap-5 max-w-full sm:max-w-[40%]">
          <h1 className="text-3xl sm:text-4xl leading-[2.5rem] sm:leading-[3rem] font-bold text-secondary-01 text-center sm:text-left">
            Turning Ideas into Innovative Solutions
          </h1>
          <p className="text-base sm:text-lg leading-6 sm:leading-7 font-normal text-secondary-01 text-center sm:text-left">
            We build smart, tailored software that connects creativity with
            cutting-edge technology. From design to front end, back end, and
            infrastructure, we&apos;re here to take your vision to the next
            level. Join us in shaping the digital future.
          </p>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary-01 py-3 sm:py-4 px-5 sm:px-7 text-otherColors-01 text-sm sm:text-base rounded-[10px] font-medium mx-auto sm:mx-0"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full sm:w-[650px] h-[300px] sm:h-[650px]">
          <img
            src={Robot}
            alt="Imagem do robô"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
