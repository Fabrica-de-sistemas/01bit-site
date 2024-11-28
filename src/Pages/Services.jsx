import Card from '../Components/Card';
import { Figma } from 'react-feather';
import { Database } from 'react-feather';
import { TrendingUp } from 'react-feather';

const Services = () => {
  return (
    <>
      <section id="services" className="mt-20 mx-auto px-5 flex flex-col items-center gap-10">
        <h2 className="text-center font-bold text-[28px] text-secondary-01">
          Our Services
        </h2>
        <section
          className="flex flex-wrap justify-center gap-5 sm:gap-10 lg:gap-20"
        >
          <Card
            icon={
              <Figma
                size={120}
                strokeWidth={1.5}
                className="text-primary-01"
              />
            }
            title={'UX/UI + Front-End'}
            description={'Experiences that bring ideas to life.'}
            className="hover:translate-y-[10px] transition-transform duration-200 w-full sm:w-[45%] lg:w-[30%]"
          />
          <Card
            icon={
              <Database
                size={120}
                strokeWidth={1.5}
                className="text-primary-01"
              />
            }
            title={'Back End'}
            description={'Security and scale for your project.'}
            className="hover:translate-y-[10px] transition-transform duration-200 w-full sm:w-[45%] lg:w-[30%]"
          />
          <Card
            icon={
              <TrendingUp
                size={120}
                strokeWidth={1.5}
                className="text-primary-01"
              />
            }
            title={'Infrastructure'}
            description={'Secure connections for growth.'}
            className="hover:translate-y-[10px] transition-transform duration-200 w-full sm:w-[45%] lg:w-[30%]"
          />
        </section>
      </section>

    </>
  );
};

export default Services;
