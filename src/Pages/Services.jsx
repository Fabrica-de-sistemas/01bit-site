import Card from '../Components/Card';
import { Figma } from 'react-feather';
import { Database } from 'react-feather';
import { TrendingUp } from 'react-feather';

const Services = () => {
  return (
    <section
      id="services"
      className="mt-20 mx-10 flex flex-col items-center gap-10"
    >
      <div>
        <h2 className="text-center font-bold text-[28px] text-secondary-01">
          Nossos Serviços
        </h2>
        <p className="hidden md:flex text-base text-secondary-02">
          Fornecemos soluções completas para todas as etapas do desenvolvimento
          digital.
        </p>
      </div>
      <section className="flex flex-col gap-[10px] md:flex-row items-center justify-center md:flex-wrap md:gap-6 ">
        <div className="animate-jump-in animate-duration-[700ms] animate-delay-[800ms] animate-ease-linear">
          <Card
            icon={
              <Figma size={50} strokeWidth={1.5} className="text-primary-01 " />
            }
            title={'UX/UI + Front-End'}
            description={'Experiências que transformam ideias em realidade.'}
          />
        </div>
        <div className="animate-jump-in animate-duration-[900ms] animate-delay-[800ms] animate-ease-linear">
          <Card
            icon={
              <Database
                size={50}
                strokeWidth={1.5}
                className="text-primary-01 "
              />
            }
            title={'Back End'}
            description={'Segurança e escalabilidade para o seu projeto.'}
          />
        </div>
        <div className="animate-jump-in animate-duration-[1010ms] animate-delay-[800ms] animate-ease-linear">
          <Card
            icon={
              <TrendingUp
                size={50}
                strokeWidth={1.5}
                className="text-primary-01 "
              />
            }
            title={'Infraestrutura'}
            description={'Conexões seguras para o crescimento.'}
          />
        </div>
      </section>
    </section>
  );
};

export default Services;
