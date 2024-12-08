import { motion } from 'framer-motion';
import Landing1 from '../assets/projects/landing1.webp';
import Landing3 from '../assets/projects/landing3.webp';
import Landing4 from '../assets/projects/landing4.webp';
import Landing5 from '../assets/projects/landing5.webp';
// import { useRef } from 'react';

// import { ChevronLeft } from 'react-feather';
// import { ChevronRight } from 'react-feather';

const Projects = () => {
  const images = [
    Landing1,
    Landing3,
    Landing5,
    Landing3,
    Landing4,
    Landing1,
    Landing5,
    Landing4,
  ];
  // const carousel = useRef(null);

  // const handleLeftClick = (e) => {
  //   e.preventDefault();
  //   carousel.current.scrollLeft -= carousel.current.offsetWidth;
  //   console.log(carousel.current.offsetWidth);
  // };
  // const handleRightClick = (e) => {
  //   e.preventDefault();
  //   console.log(carousel.current.offsetWidth);
  //   carousel.current.scrollLeft += carousel.current.offsetWidth;
  // };
  return (
    <section
      id="projects"
      className="mt-20 bg-secondary-03 py-10 lg:py-20 relative"
    >
      <h2 className="max-w-[460px] mx-auto text-wrap text-center font-bold text-[24px] md:text-[28px] text-grayColors-01 mb-8 px-2 select-none">
        Conheça alguns projetos realizados{' '}
        <span className="text-primary-02">pela 01-bit</span>
      </h2>

      <section className="grid place-content-center gap-6">
        <article className="relative w-[300px] md:w-[500px] lg:w-[1080px] mx-auto overflow-hidden">
          {/* <ChevronLeft
            onClick={handleLeftClick}
            strokeWidth={1.5}
            className="w-6 h-6 lg:h-10 lg:w-10 text-secondary-01 text-[1.25rem] bg-otherColors-01 text-center leading-10 rounded-full cursor-pointer shadow-boxShadow absolute left-[-22px] top-2/4 -translate-y-1/2 z-50"
          /> */}
          {/* <div
            id="carousel"
            ref={carousel}
            className="w-[300px] md:w-[500px] lg:w-[1000px] mx-auto flex flex-nowrap overflow-hidden gap-6 overflow-x-auto scroll-smooth scollBar transition-transform duration-300 ease-out"
          >
            {images.map((image, index) => (
              <motion.a
                href="#"
                key={index}
                className="flex-1 min-w-[270px]  md:min-w-[400px] md:min-h-[200px] cursor-pointer select-none"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img
                  src={image}
                  alt="texto alternativo"
                  draggable="false"
                  className="w-full h-[90%] rounded-xl pointer-events-none relative object-cover"
                />
              </motion.a>
            ))}
          </div> */}
          <article className="flex w-[calc(300px*8)] animate-infinite-carousel gap-4">
            {images.concat(images).map((image, index) => (
              <motion.a
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
                href="#"
                key={index}
                className="flex-shrink-0 w-[300px] h-[200px] bg-gray-200  select-none"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.a>
            ))}
          </article>
          {/* <ChevronRight
            onClick={handleRightClick}
            strokeWidth={1.5}
            className="w-6 h-6 lg:h-10 lg:w-10 text-secondary-01 text-[1.25rem] bg-otherColors-01 text-center leading-10 rounded-full cursor-pointer shadow-boxShadow absolute right-[-22px] top-2/4 -translate-y-1/2 z-50"
          /> */}
        </article>

        <a
          href="#contact"
          className="flex  justify-self-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal select-none"
        >
          Inicie seu projeto agora
        </a>
      </section>
    </section>
  );
};

export default Projects;
