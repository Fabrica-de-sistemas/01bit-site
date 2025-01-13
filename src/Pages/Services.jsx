import { useEffect } from 'react';
import Card from '../Components/Card';
import ProcessAutomation from '/src/assets/imgs/time-is-money.png';
import Devices from '/src/assets/imgs/devices.png';
import WebDesign from '/src/assets/imgs/web-design.png';
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
        className="flex flex-col gap-6 md:flex-row items-center justify-center md:flex-wrap md:gap-10"
      >
        <Card
          icon={<img src={WebDesign} alt="Icone de web design" />}
          title={t('services.cards.card1.title')}
          description={t('services.cards.card1.description')}
        />
        <Card
          icon={
            <img
              src={ProcessAutomation}
              alt="Icone de automação de processos"
            />
          }
          title={t('services.cards.card2.title')}
          description={t('services.cards.card2.description')}
        />
        <Card
          icon={<img src={Devices} alt="Icone de devices" />}
          title={t('services.cards.card3.title')}
          description={t('services.cards.card3.description')}
        />
      </article>
    </section>
  );
};

export default Services;
