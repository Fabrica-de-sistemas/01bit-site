import DesktopImage01 from '../assets/desktop/Image01.png';
import DesktopImage02 from '../assets/desktop/Image02.png';
import DesktopImage03 from '../assets/desktop/Image03.png';
import MobileImage01 from '../assets/mobile/images/image_1.png';
import MobileImage02 from '../assets/mobile/images/image_2.png';
import MobileImage03 from '../assets/mobile/images/image_3.png';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="mt-20 px-[5%] flex flex-col lg:flex-row items-center lg:items-start gap-10"
      >
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-5">
          <div className="flex flex-col gap-3">
            <img
              className="w-[150px] sm:w-[200px] lg:w-[274px] h-auto object-cover rounded-[10px]"
              src={DesktopImage02}
              alt="Imagem 2"
            />
            <img
              className="w-[150px] sm:w-[200px] lg:w-[274px] h-auto object-cover rounded-[10px]"
              src={DesktopImage03}
              alt="Imagem 3"
            />
          </div>
          <div>
            <img
              className="w-[150px] sm:w-[200px] lg:w-[274px] h-auto object-cover rounded-[10px] mt-5 lg:mt-20"
              src={DesktopImage01}
              alt="Imagem 1"
            />
          </div>
        </div>

        <div className="w-full lg:w-[35%] text-center lg:text-left">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-secondary-01 mb-5">
            About Us
          </h2>
          <p className="font-normal text-base sm:text-lg leading-7 sm:leading-8 text-secondary-01 mb-5">
            At 01-bit, we are passionate about turning ideas into unique digital
            solutions. Our team of experts works closely with you to design,
            develop, and implement tailored solutions that make a difference. With
            an innovative and creative approach, we are involved in every step —
            from user experience design to front-end and back-end development, all
            the way to infrastructure.
          </p>
          <p className="font-normal text-base sm:text-lg leading-7 sm:leading-8 text-secondary-01">
            We are committed to bringing your vision to the next level, merging
            cutting-edge technology with creativity to create an impactful digital
            future.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="#" className="text-purple-500 hover:text-purple-700">LinkedIn</a>
            <a href="#" className="text-purple-500 hover:text-purple-700">Email</a>
            <a href="#" className="text-purple-500 hover:text-purple-700">Instagram</a>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
