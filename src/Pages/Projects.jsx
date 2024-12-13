import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Landing1 from '../assets/projects/landing1.webp';
import Landing3 from '../assets/projects/landing3.webp';
import Landing4 from '../assets/projects/landing4.webp';
import Landing5 from '../assets/projects/landing5.webp';

const Projects = () => {
  const { t } = useTranslation();

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

  return (
    <section
      id="projects"
      className="mt-20 bg-secondary-03 py-10 lg:py-20 relative"
    >
      <h2 className="max-w-[460px] mx-auto text-wrap text-center font-bold text-[24px] md:text-[28px] text-grayColors-01 mb-8 px-2 select-none">
        {t('projects.heading')}
      </h2>

      <section className="grid place-content-center gap-6">
        <article className="relative w-[300px] md:w-[500px] lg:w-[1080px] mx-auto overflow-hidden">
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
                className="flex-shrink-0 w-[300px] h-[200px] bg-gray-200 select-none"
              >
                <img
                  src={image}
                  alt={`${t('projects.altText')} ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.a>
            ))}
          </article>
        </article>

        <a
          href="#contact"
          className="flex justify-self-center gap-2 bg-primary-01 py-4 px-14 text-otherColors-01 text-base rounded-3xl hover:bg-primary-03 font-normal select-none"
        >
          {t('projects.button')}
        </a>
      </section>
    </section>
  );
};

export default Projects;
