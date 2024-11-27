import Image01 from '../assets/mobile/images/image_1.png';
import Image02 from '../assets/mobile/images/image_2.png';
import Image03 from '../assets/mobile/images/image_3.png';
const About = () => {
  return (
    <section className="flex flex-col justify-end mt-20 px-10 max-w-[540px] mx-auto">
      <div className="flex flex-row-reverse items-start gap-5">
        <div>
          <img className="mb-5" src={Image01} alt="Perfil image" />
          <img src={Image03} alt="Perfil image" />
        </div>
        <div className="self-center">
          <img src={Image02} alt="Perfil image" />
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
  );
};

export default About;
