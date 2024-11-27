import Image01 from '../assets/mobile/images/image_1.png';
import Image02 from '../assets/mobile/images/image_2.png';
import Image03 from '../assets/mobile/images/image_3.png';
const About = () => {
  return (
    <section id="about" className="mt-20 px-[8%] flex justify-right items-center">
      <div className="w-[20%] flex flex-col gap-3 mr-[20px]">
        <img className="w-[274px] h-[375px] object-cover rounded-[10px]" src={Image02} alt="Imagem 2" />
        <img className="w-[274px] h-[375px] object-cover rounded-[10px]" src={Image03} alt="Imagem 3" />
      </div>
      <div className="w-[20%] flex flex-col mr-[25px]">
      <img className="w-[274px] h-[476px] object-cover rounded-[10px]" src={Image01} alt="Imagem 1" />
      </div>

      <div className="w-[45%] text-left">
        <h2 className="font-bold text-4xl text-secondary-01 mb-5">
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
        <p className="font-normal text-lg leading-8 text-secondary-01">
          We are committed to bringing your vision to the next level, merging
          cutting-edge technology with creativity to create an impactful digital
          future.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#" className="text-purple-500 hover:text-purple-700">LinkedIn</a>
          <a href="#" className="text-purple-500 hover:text-purple-700">Email</a>
          <a href="#" className="text-purple-500 hover:text-purple-700">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default About;
