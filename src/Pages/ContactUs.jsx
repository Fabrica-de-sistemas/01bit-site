import React, { useEffect } from 'react';
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success(t('contactUs.successMessage'));
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
        <section className="screen320px:w-[301px] screen414px:w-[361px] screen414px:px-[30px] lg:flex lg:flex-row mt-20 mx-auto w-full lg:w-[900px] bg-otherColors-01 shadow-boxShadow rounded-3xl py-10 px-5 lg:px-10 gap-10 relative">
          {/* Div de informações de contato */}
          <div className="hidden lg:flex w-full lg:w-[42%] bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-20 flex-col lg:relative">
            <div className="grid gap-5">
              <h2 className="text-white text-[24px] font-bold select-none">
                {t('contactUs.howToFindUs')}
              </h2>
              <address className="flex flex-col gap-4 text-white">
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary-02" />
                  <span className="font-light select-none">
                    {t('contactUs.address')}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary-02" />
                  <a
                    href="mailto:bit01@contact.com"
                    className="font-light select-none"
                  >
                    {t('contactUs.email')}
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
              <LinkedinButtonLink className="text-primary-02 hover:text-grayColors-01 select-none" />
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
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full lg:w-[58%] lg:ml-0 lg:mt-10">
            <div className="mb-8 flex gap-2 flex-col">
              <h2 className="text-center lg:text-left font-medium text-[28px] text-secondary-01 select-none">
                {t('contactUs.title')}
              </h2>
              <p className="md:flex text-center lg:text-left text-xs lg:text-sm text-secondary-02 select-none">
                {t('contactUs.subtitle')}
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5 max-w-lg mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                  <input
                    type="text"
                    placeholder={t('contactUs.formLabels.lastName')}
                    className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                    {...register('lastName', {
                      required: 'O sobrenome é obrigatório.',
                      minLength: {
                        value: 3,
                        message: 'O nome deve ter pelo menos 3 caracteres.',
                      },
                    })}
                    onChangeCapture={() => trigger('lastName')}
                    onKeyUp={() => trigger('lastName')}
                    aria-describedby="lastNameError"
                  />
                  <p
                    id="lastNameError"
                    className="text-xs text-otherColors-02 text-left mt-1 font-light select-none"
                    aria-live="assertive"
                  >
                    {errors?.lastName?.message || ''}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder={t('contactUs.formLabels.email')}
                    className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                    {...register('email', {
                      required: 'O email é obrigatório.',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Formato de email inválido.',
                      },
                    })}
                    onChangeCapture={() => trigger('email')}
                    onKeyUp={() => trigger('email')}
                    aria-describedby="emailError"
                  />
                  <p
                    id="emailError"
                    className="text-xs text-otherColors-02 text-left mt-1 font-light select-none"
                    aria-live="assertive"
                  >
                    {errors?.email?.message || ''}
                  </p>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={t('contactUs.formLabels.tel')}
                    className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                    {...register('tel', {
                      required: 'O telefone é obrigatório.',
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Apenas números são permitidos.',
                      },
                    })}
                    onChangeCapture={() => trigger('tel')}
                    onKeyUp={() => trigger('tel')}
                    aria-describedby="telError"
                  />
                  <p
                    id="telError"
                    className="text-xs text-otherColors-02 text-left mt-1 font-light select-none"
                    aria-live="assertive"
                  >
                    {errors?.tel?.message || ''}
                  </p>
                </div>
              </div>

              <div>
                <textarea
                  placeholder={t('contactUs.messagePlaceholder')}
                  className="w-full py-[10px] px-4 md:px-2 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02 placeholder:text-sm select-none"
                  {...register('message', {
                    required: 'A mensagem é obrigatória',
                    minLength: {
                      value: 10,
                      message: 'A mensagem deve ter pelo menos 10 caracteres.',
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
                className="w-full lg:w-[40%] bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01 mx-auto lg:mx-0 select-none"
              >
                {t('contactUs.submitButton')}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
