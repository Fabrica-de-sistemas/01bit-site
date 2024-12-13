import { useEffect } from 'react';
import Card from '../Components/Card';
import { Figma, Database, TrendingUp } from 'react-feather';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation(); 

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
        <h2 className="text-center font-bold text-[28px] text-black select-none">
          {t('services.heading')}
        </h2>
        <p className="hidden md:flex text-base text-black select-none">
          {t('services.description')}
        </p>
      </article>
      <article
        id="cards"
        className="flex flex-col gap-[10px] md:flex-row items-center justify-center md:flex-wrap md:gap-6"
      >
        <Card
          icon={
            <Figma
              aria-hidden
              size={50}
              strokeWidth={1.5}
              className="text-primary-01 select-none"
            />
          }
          title={t('services.cards.card1.title')}
          description={t('services.cards.card1.description')}
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
          title={t('services.cards.card2.title')}
          description={t('services.cards.card2.description')}
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
          title={t('services.cards.card3.title')}
          description={t('services.cards.card3.description')}
        />
      </article>
    </section>
  );
};

export default Services;
