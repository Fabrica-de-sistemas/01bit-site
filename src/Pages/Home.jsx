import Robot from '../assets/desktop/Robot.svg';

const Home = () => {
  return (
    <section id="home" className="mt-10 mx-[5%] flex justify-between items-center md:flex row hidden">
      <div className="flex flex-col justify-center items-start gap-5 h-[650px] max-w-[40%]">
        <h1 className="text-4xl leading-[3rem] font-bold text-secondary-01">
          Turning Ideas into Innovative Solutions
        </h1>
        <p className="text-lg leading-7 font-normal text-secondary-01">
          We build smart, tailored software that connects creativity with
          cutting-edge technology. From design to front end, back end, and
          infrastructure, we&apos;re here to take your vision to the next level.
          Join us in shaping the digital future.
        </p>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-primary-01 py-4 px-7 text-otherColors-01 text-sm rounded-[10px] font-medium"
        >
          Contact Us
        </a>
      </div>

      <div className="w-[650px] h-[650px]">
        <img src={Robot} alt="Imagem do robô" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default Home;
