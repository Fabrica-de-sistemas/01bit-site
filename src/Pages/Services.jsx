import { useEffect } from 'react';
import Card from '../Components/Card';
import { Figma } from 'react-feather';
import { Database } from 'react-feather';
import { TrendingUp } from 'react-feather';
import ScrollReveal from 'scrollreveal';

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('#services .card');

    cards.forEach((card, index) => {
      const config = {
        origin: 'bottom',
        duration: 1000,
        delay: 200 * index,
        distance: '50px',
        scale: 1,
        easing: 'ease',
        opacity: 0,
      };

      ScrollReveal().reveal(card, config);
    });
  }, []);
  return (
    <section
      id="services"
      className="mt-20 mx-10 flex flex-col items-center gap-10"
    >
      <article>
        <h2 className="text-center font-bold text-[28px] text-secondary-01 select-none">
          Nossos Serviços
        </h2>
        <p className="hidden md:flex text-base text-secondary-02 select-none">
          Fornecemos soluções completas para todas as etapas do desenvolvimento
          digital.
        </p>
      </article>
      <article
        id="cards"
        className="flex flex-col gap-[10px] md:flex-row items-center justify-center md:flex-wrap md:gap-6 "
      >
        <Card
          icon={
            <Figma
              aria-hidden
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 select-none "
            />
          }
          title={'UX/UI + Front-End'}
          description={'Experiências que transformam ideias em realidade.'}
        />

        <Card
          icon={
            <Database
              aria-hidden
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 select-none"
            />
          }
          title={'Back End'}
          description={'Segurança e escalabilidade para o seu projeto.'}
        />

        <Card
          icon={
            <TrendingUp
              aria-hidden
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 select-none"
            />
          }
          title={'Infraestrutura'}
          description={'Conexões seguras para o crescimento.'}
        />
      </article>
    </section>
  );
};

export default Services;
