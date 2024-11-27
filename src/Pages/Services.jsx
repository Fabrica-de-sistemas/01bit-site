import Card from '../Components/Card';
import { Figma } from 'react-feather';
import { Database } from 'react-feather';
import { TrendingUp } from 'react-feather';
const Services = () => {
  return (
    <section className="mt-20 mx-10 flex flex-col items-center gap-10">
      <h2 className="text-center font-bold text-[28px] text-secondary-01">
        Our Services
      </h2>
      <section className="flex flex-col gap-[10px]">
        <Card
          icon={
            <Figma size={50} strokeWidth={1.5} className="text-primary-01 " />
          }
          title={'UX/UI + Front-End'}
          description={'Experiences that bring ideas to life.'}
        />
        <Card
          icon={
            <Database
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 "
            />
          }
          title={'Back End'}
          description={'Security and scale for your project.'}
        />
        <Card
          icon={
            <TrendingUp
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 "
            />
          }
          title={'Infrastructure'}
          description={'Secure connections for growth.'}
        />
      </section>
    </section>
  );
};

export default Services;
