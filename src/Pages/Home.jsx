import Illustration from '../assets/mobile/logo/illustration.svg';

const Home = () => {
  return (
    <section className="mt-10 mx-10 flex flex-col justify-center items-center gap-3">
      <div className="w-[164px] mb-5">
        <img src={Illustration} alt="Imagem do robô" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl leading-8 font-bold text-secondary-01 mb-5">
          Turning Ideas into Innovative Solutions
        </h1>
        <p className=" max-w-[300px] mx-auto text-[13px] leading-6 font-normal text-secondary-01 mb-10">
          we build smart, tailored software that connects creativity with
          cutting-edge technology. From design to front end, back end, and
          infrastructure, we&apos;re here to take your vision to the next level.
          Join us in shaping the digital future.
        </p>
        <a
          href="#"
          className=" justify-self-center flex items-center justify-center gap-2 bg-primary-01 py-4 px-7 text-otherColors-01 text-sm rounded-[30px] font-medium"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Home;
