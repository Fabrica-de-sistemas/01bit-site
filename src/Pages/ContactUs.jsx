import { MapPin, Mail, Phone, Linkedin, Instagram } from 'react-feather';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success('Formulário enviado com sucesso!');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div id="contact">
        <section className="screen320px:w-[301px] screen414px:w-[361px] screen414px:px-[30px] lg:flex lg:flex-row mt-20 mx-auto w-full lg:w-[900px] bg-otherColors-01 shadow-boxShadow rounded-3xl py-10 px-5 lg:px-10 gap-10  lg:gap-10 relative">
          <div className="hidden lg:flex w-full lg:w-[48%] bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-20  flex-col absolute left-[-50px] top-7">
            <div className="grid gap-5">
              <h2 className="text-white text-[24px] font-bold">
                Informações de Contato
              </h2>
              <div className="flex flex-col gap-4 text-white">
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary-02" />
                  <p className="font-light">Av ali na esquina, 15 - RJ</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary-02" />
                  <p className="font-light">bit01@contact.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary-02" />
                  <p className="font-light">+55 3333 3333</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-24">
              <a href="">
                <Linkedin className="text-primary-02 hover:text-grayColors-01" />
              </a>
              <a href="">
                <Instagram className="text-primary-02 hover:text-grayColors-01" />
              </a>
              <a href="">
                <Mail className="text-primary-02 hover:text-grayColors-01" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[58%] lg:ml-96 lg:mt-10">
            <h2 className="text-center lg:text-left font-medium text-[28px] text-secondary-01 mb-8">
              Enviar mensagem
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5 max-w-lg mx-auto p-3"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Primeiro nome"
                    className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
                    {...register('firstName', {
                      required: 'O nome é obrigatório.',
                      minLength: {
                        value: 3,
                        message: 'O nome deve ter pelo menos 3 caracteres.',
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                        message: 'O nome deve conter apenas letras.',
                      },
                    })}
                  />
                  {errors?.firstName && (
                    <p className="text-xs text-otherColors-02 text-left mt-1 font-light ">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
                    {...register('lastName', {
                      required: 'O sobrenome é obrigatório.',
                      minLength: {
                        value: 3,
                        message: 'O nome deve ter pelo menos 3 caracteres.',
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                        message: 'O nome deve conter apenas letras.',
                      },
                    })}
                  />
                  {errors?.lastName && (
                    <p className="text-xs text-otherColors-02 text-left mt-1 font-light ">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
                    {...register('email', {
                      required: 'O email é obrigatório.',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Formato de email inválido.',
                      },
                    })}
                  />
                  {errors?.email && (
                    <p className="text-xs text-otherColors-02 text-left mt-1 font-light ">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Número de telefone"
                    className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
                    {...register('tel', {
                      required: 'O telefone é obrigatório.',
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Apenas números são permitidos.',
                      },
                    })}
                  />
                  {errors?.tel && (
                    <p className="text-xs text-otherColors-02 text-left mt-1 font-light ">
                      {errors.tel.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
                  {...register('message', {
                    required: 'A messagem é obrigatória',
                    minLength: {
                      value: 10,
                      message: 'A mensagem deve ter pelo menos 10 caracteres.',
                    },
                  })}
                />
                {errors?.message && (
                  <p className="text-xs text-otherColors-02 text-left mt-1 font-light ">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button className="w-full lg:w-[40%] bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01 mx-auto lg:mx-0">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
