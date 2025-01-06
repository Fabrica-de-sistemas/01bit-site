import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, MessageCircle } from 'react-feather';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollReveal from 'scrollreveal';
import {
  EmailButtonLink,
  InstagramButtonLink,
  LinkedinButtonLink,
} from '../Components/SocialMedias';
import '../i18n';

const ContactUs = () => {
  const { t } = useTranslation();
  const [showRedirectOptions, setShowRedirectOptions] = useState(false); // Estado para controlar a exibição das opções de envio

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm();

  const [firstName, setFirstName] = useState("");
  const [detailsProject, setDetailsProject] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setFirstName(data["firstName"]);
    setDetailsProject(data["message"]);
    console.log(firstName);
    console.log(setDetailsProject);

    // Exibir as opções de envio após o sucesso do formulário
    setShowRedirectOptions(true);
  };

  const handleWhatsAppRedirect = () => {
    setShowRedirectOptions(false);
    console.log(firstName);
    console.log(detailsProject);
    const message = `Olá, meu nome é ${firstName}.\n\ngostaria de entrar em contato sobre o meu projeto, saber sobre a precificação e etc. Segue os detalhes:\n\n${detailsProject}`;
    window.location.href = `https://wa.me/5521967441433?text=${encodeURIComponent(
      message,
    )}`;
  };

  const handleEmailRedirect = () => {
    setShowRedirectOptions(false);
    window.location.href = `mailto:bit01@contact.com?subject=Mensagem de ${watch(
      'firstName',
    )} ${watch('lastName')}&body=${encodeURIComponent(watch('message'))}`;
  };

  

  useEffect(() => {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    ScrollReveal().reveal(document.querySelector('#contact'), config);
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div id="contact">
        <section className="screen320px:w-[301px] screen414px:w-[361px] screen414px:px-[30px] lg:flex lg:flex-row lg:items-center lg:justify-center mt-20 mx-auto w-full lg:w-[900px] bg-otherColors-01 shadow-boxShadow rounded-3xl py-20 md:py-10 px-5 lg:px-10 gap-10 relative">
          {/* Div de informações de contato */}
          <div className="hidden lg:flex w-full h-[300px] lg:w-[42%] bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-20 flex-col lg:relative">
            <div className="grid gap-5">
              <h2 className="text-white text-[24px] font-bold select-none">
                {t('contactUs.howToFindUs')}
              </h2>
              <address className="flex flex-col gap-4 text-white">
                {/* <div className="flex items-center gap-4">
                  <MapPin className="text-primary-02" />
                  <span className="font-light select-none">
                    {t('contactUs.address')}
                  </span>
                </div> */}
                <div className="flex items-center gap-4">
                  <Mail className="text-primary-02" />
                  <a
                    href="mailto:fabricadesistemas@outlook.com"
                    className="font-light select-none"
                  >
                    fabricadesistemas@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary-02" />
                  <a href="tel:+5533333333" className="font-light select-none">
                    {t('contactUs.phone')}
                  </a>
                </div>
              </address>
            </div>
            <div className="flex gap-2 mt-24">
              {/* <LinkedinButtonLink className="text-primary-02 hover:text-grayColors-01 select-none" />
              <InstagramButtonLink className="text-primary-02 hover:text-grayColors-01 select-none" />
              <EmailButtonLink className="text-primary-02 hover:text-grayColors-01 select-none" /> 
              <a
                href="https://wa.me/5521967441433"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-02 hover:text-grayColors-01 select-none"
              >
                <MessageCircle size={24} />
              </a>
              */}
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full lg:w-[58%] lg:ml-0 lg:mt-10">
            {/* Exibir as opções de envio após o envio do formulário */}
            {showRedirectOptions === false ? (
              <>
                <div className="mb-8 flex gap-2 flex-col">
                  <h2 className="text-center lg:text-left font-medium text-[20px] text-secondary-01 select-none">
                    {t('contactUs.title')}
                  </h2>
                  <p className="md:flex text-center lg:text-left text-xs lg:text-sm text-secondary-02 select-none font-light">
                    {t('contactUs.subtitle')}
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-5 max-w-lg mx-auto lg:max-w-none lg:mx-0"
                >
                  <div>
                    <input
                      type="text"
                      placeholder={t('contactUs.formLabels.firstName')}
                      className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                      {...register('firstName', {
                        required: 'O nome é obrigatório.',
                        minLength: {
                          value: 3,
                          message: 'O nome deve ter pelo menos 3 caracteres.',
                        },
                      })}
                      onChangeCapture={() => trigger('firstName')}
                      onKeyUp={() => trigger('firstName')}
                      aria-describedby="firstNameError"
                    />
                    <p
                      id="firstNameError"
                      className="text-xs text-otherColors-02 text-left mt-1 font-light select-none"
                      aria-live="assertive"
                    >
                      {errors?.firstName?.message}
                    </p>
                  </div>

                  <div>
                    <textarea
                      placeholder={t('contactUs.messagePlaceholder')}
                      className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                      {...register('message', {
                        required: 'A mensagem é obrigatória',
                        minLength: {
                          value: 10,
                          message:
                            'A mensagem deve ter pelo menos 10 caracteres.',
                        },
                      })}
                      onChangeCapture={() => trigger('message')}
                      onKeyUp={() => trigger('message')}
                      aria-describedby="messageError"
                    />
                    {errors?.message && (
                      <p
                        id="messageError"
                        className="text-xs text-otherColors-02 text-left mt-1 font-light select-none"
                        aria-live="assertive"
                      >
                        {errors?.message?.message || ''}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full lg:w-[40%] bg-primary-01 hover:bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01 mx-auto lg:mx-0 select-none"
                  >
                    {t('contactUs.submitButton')}
                  </button>
                </form>
              </>
            ) : (
              <div className="mt-10 text-center">
                <h3 className="mt-[-40px] lg:mt-[-80px] font-medium text-2xl mb-2 lg:text-[28px] text-secondary-01 select-none">
                  {t('contactUs.redirectOptions')}
                </h3>
                <p className="text-secondary-02 text-sm font-light">
                  Escolha email ou WhatsApp e estamos prontos para te ouvir!
                </p>
                <div className="flex gap-4 justify-center mt-5">
                  <button
                    onClick={handleEmailRedirect}
                    className="bg-primary-01 hover:bg-primary-03 text-grayColors-01 px-4 py-3  rounded-3xl text-xs lg:text-base text-nowrap"
                  >
                    {t('contactUs.emailOption')}
                  </button>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="bg-primary-01 hover:bg-primary-03 text-grayColors-01 px-4 py-3  rounded-3xl text-xs lg:text-base text-nowrap"
                  >
                    {t('contactUs.whatsAppOption')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
