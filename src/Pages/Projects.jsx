import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Landing1 from '../assets/projects/landing1.jpg';
import Landing2 from '../assets/projects/landing2.jpg';
import Landing3 from '../assets/projects/landing3.jpg';
import Landing4 from '../assets/projects/landing4.jpg';
import Landing5 from '../assets/projects/landing5.png';

import { ChevronLeft, ChevronRight } from 'react-feather';
import { useRef } from 'react';

const Projects = () => {
  const carousel = useRef(null);
  const { t } = useTranslation();

  const handleLeftClick = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  const images = [Landing1, Landing2, Landing3, Landing4, Landing5];

  return (
    <section
      id="projects"
      className="mt-20 bg-secondary-03 py-10 lg:py-20 relative"
    >
      <h2 className="max-w-[460px] mx-auto text-wrap text-center font-bold text-[24px] md:text-[28px] text-grayColors-01 mb-8 px-2 select-none">
        {t('projects.heading')}
      </h2>

      <section className="grid place-content-center gap-6">
        <article className="relative">
          {/* Botão para mover para a esquerda */}
          <ChevronLeft
            onClick={handleLeftClick}
            strokeWidth={1.5}
            className=" w-6 h-6 lg:h-10 lg:w-10 text-secondary-01 bg-otherColors-01 rounded-full cursor-pointer shadow-boxShadow absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10"
          />
          {/* Carrossel */}
          <div
            ref={carousel}
            className="carousel w-[300px] md:w-[500px] lg:w-[800px] xl:w-[1000px] mx-auto flex items-stretch gap-4 overflow-hidden overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {images.map((image, index) => (
              <motion.a
                href="#"
                key={index}
                className="flex-shrink-0 min-w-[270px] md:min-w-[400px] cursor-pointer select-none"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  draggable="false"
                  className="w-full h-[200px] rounded-xl object-cover"
                />
              </motion.a>
            ))}
          </div>
          {/* Botão para mover para a direita */}
          <ChevronRight
            onClick={handleRightClick}
            strokeWidth={1.5}
            className=" w-6 h-6 lg:h-10 lg:w-10 text-secondary-01 bg-otherColors-01 rounded-full cursor-pointer shadow-boxShadow absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10"
          />
        </article>

        <a
          href="#contact"
          className="flex justify-center justify-self-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal select-none"
        >
          {t('projects.button')}
        </a>
      </section>
    </section>
  );
};

export default Projects;
