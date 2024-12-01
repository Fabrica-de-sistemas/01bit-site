import ImgProject from '../assets/desktop/Image.png';
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from 'react-feather';

const Projects = () => {
  return (
    <section id="projects" className="mt-20 bg-secondary-03 py-10 lg:py-20">
      <h2 className="text-center font-bold text-[28px] text-grayColors-01 mb-8">
        Nossos Projetos
      </h2>
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
        <ChevronRight
          size={90}
          strokeWidth={3.5}
          className="hidden lg:flex ml-11 text-grayColors-01 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center mb-7 mx-10 lg:mx-0">
          <img
            src={ImgProject}
            className="w-[295px] h-[280px] lg:w-[997px] lg:h-[569px] mx-auto mb-3 flex-1"
            alt="project"
          />
          <div className="flex lg:hidden gap-1 items-center justify-center">
            <span className="rounded-full bg-primary-02 w-3 h-3"></span>
            <span className="rounded-full bg-grayColors-01 w-2 h-2"></span>
            <span className="rounded-full bg-grayColors-01 w-2 h-2"></span>
          </div>
        </div>
        <div className=" w-[300px] lg:w-[600px] mx-auto lg:mx-0 flex items-center justify-center text-grayColors-01 text-left gap-2 lg:flex-col lg:items-start">
          <div>
            <h4 className="font-bold text-base mb-1">E-commerce</h4>
            <p className="font-normal text-[10px] mb-2 w-[28ch]">
              Uma plataforma intuitiva e integrada para uma envolvente e completa
              experiência de shopping.
            </p>
            <h4 className="font-bold text-base mb-1">Technologies Used</h4>
            <p className="font-normal text-[10px] mb-2 w-[25ch]">
              Figma | React | Tailwind CSS | Node.js | Express | MongoDB
            </p>
          </div>
          <div>
            <span className="block font-bold text-xs text-nowrap ">
              Visitar o projeto
            </span>
            <a
              href="#"
              className="font-normal text-[10px] mb-1 text-primary-02 underline "
            >
              Ver site
            </a>
          </div>
        </div>
        <ChevronLeft
          size={90}
          strokeWidth={3.5}
          className="hidden lg:flex mr-11 text-grayColors-01 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Projects;
