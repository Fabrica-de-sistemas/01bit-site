import { motion } from 'framer-motion';

import Landing1 from '../assets/projects/landing1.webp';
import Landing3 from '../assets/projects/landing3.webp';
import Landing4 from '../assets/projects/landing4.webp';
import Landing5 from '../assets/projects/landing5.webp';

import { ChevronLeft } from 'react-feather';
import { ChevronRight } from 'react-feather';
import { useRef, useEffect, useState } from 'react';

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

const Projects = () => {
  const carrousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
  }, [width]);
  return (
    <section
      id="projects"
      className="mt-20 bg-secondary-03 py-10 lg:py-20 relative"
    >
      <h2 className="max-w-[460px] mx-auto text-wrap text-center font-bold text-[24px] md:text-[28px] text-grayColors-01 mb-8 px-2">
        Conheça alguns projetos realizados{' '}
        <span className="text-primary-02">pela 01-bit</span>
      </h2>

      <div className="max-w-[500px] lg:max-w-[900px] mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
        <div className="flex flex-col items-center justify-center mb-7 mx-10 lg:mx-0">
          <div className="w-full mx-auto max-w-[900px]">
            <motion.div
              className="cursor-grab overflow-hidden"
              whileTap={{ cursor: 'grabbing' }}
              ref={carrousel}
            >
              <motion.div
                className="flex gap-2"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[270px]  md:min-w-[400px] md:min-h-[200px] cursor-pointer"
                  >
                    <img
                      href="www.google.com"
                      src={image}
                      alt="texto alternativo"
                      className="w-full h-[90%] rounded-xl pointer-events-none"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="flex  justify-self-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal"
      >
        Solicite um orçamento
      </a>
    </section>
  );
};

export default Projects;
