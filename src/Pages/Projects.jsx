import ImgProject from '../assets/mobile/images/imgProject.png';

const Projects = () => {
  return (
    <section className="mt-20 bg-secondary-03 py-10">
      <h2 className="text-center font-bold text-[28px] text-grayColors-01 mb-8">
        Our Projects
      </h2>
      <div className="max-w-[500px] mx-auto mb">
        <div className="flex flex-col items-center justify-center mb-7 mx-10 ">
          <img
            src={ImgProject}
            className="w-[295px] h-[280px] mb-3"
            alt="project"
          />
          <div className="flex gap-1 items-center justify-center">
            <span className="rounded-full bg-primary-02 w-3 h-3"></span>
            <span className="rounded-full bg-grayColors-01 w-2 h-2"></span>
            <span className="rounded-full bg-grayColors-01 w-2 h-2"></span>
          </div>
        </div>
        <div className=" w-[300px] mx-auto flex items-center justify-center text-grayColors-01 text-left gap-2">
          <div>
            <h4 className="font-bold text-base mb-1">E-commerce</h4>
            <p className="font-normal text-[10px] mb-2 w-[28ch]">
              An intuitive and integrated platform for an engaging and complete
              shopping experience.
            </p>
            <h4 className="font-bold text-base mb-1">Technologies Used</h4>
            <p className="font-normal text-[10px] mb-2 w-[25ch]">
              Figma | React | Tailwind CSS | Node.js | Express | MongoDB
            </p>
          </div>
          <div>
            <span className="block font-bold text-xs text-nowrap ">
              Visit the Project
            </span>
            <a
              href="#"
              className="font-normal text-[10px] mb-1 text-primary-02 underline "
            >
              View live site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
