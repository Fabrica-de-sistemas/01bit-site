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
        id="about-desktop" 
        className="hidden md:flex mt-20 px-[8%] justify-right items-center"
      >
        <div className="md:w-[20%] md:flex md:flex-col md:gap-3 md:mr-[20px]">
          <img 
            className="md:w-[274px] md:h-[375px] object-cover rounded-[10px]" 
            src={DesktopImage02} 
            alt="Imagem 2" 
          />
          <img 
            className="md:w-[274px] md:h-[375px] object-cover rounded-[10px]" 
            src={DesktopImage03} 
            alt="Imagem 3" 
          />
        </div>
        <div className="md:w-[20%] md:flex md:flex-col md:mr-[25px]">
          <img 
            className="md:w-[274px] md:h-[476px] object-cover rounded-[10px]" 
            src={DesktopImage01} 
            alt="Imagem 1" 
          />
        </div>
        <div className="md:w-[45%] md:text-left">
          <h2 className="font-bold text-4xl text-secondary-01 mb-5">
            About Us
          </h2>
          <p className="font-normal text-lg leading-8 text-secondary-01 mb-5">
            At 01-bit, we are passionate about turning ideas into unique digital
            solutions. Our team of experts works closely with you to design,
            develop, and implement tailored solutions that make a difference. With
            an innovative and creative approach, we are involved in every step — 
            from user experience design to front-end and back-end development, all
            the way to infrastructure.
          </p>
          <p className="font-normal text-lg leading-8 text-secondary-01">
            We are committed to bringing your vision to the next level, merging 
            cutting-edge technology with creativity to create an impactful digital 
            future.
          </p>
          <div className="md:flex md:gap-4 mt-6">
            <a href="#" className="text-purple-500 hover:text-purple-700">LinkedIn</a>
            <a href="#" className="text-purple-500 hover:text-purple-700">Email</a>
            <a href="#" className="text-purple-500 hover:text-purple-700">Instagram</a>
          </div>
        </div>
      </section>
      
      <section 
        id="about" 
        className="md:hidden flex flex-col justify-end mt-20 px-10 max-w-[540px] mx-auto"
      >
        <div className="flex flex-row-reverse items-start gap-5">
          <div>
            <img className="mb-5" src={MobileImage01} alt="Perfil image" />
            <img src={MobileImage03} alt="Perfil image" />
          </div>
          <div className="self-center">
            <img src={MobileImage02} alt="Perfil image" />
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
        </div>
      </section>
    </>
  );
};

export default About;
