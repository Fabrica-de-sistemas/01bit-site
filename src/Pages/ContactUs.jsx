import { MapPin, Mail, Phone, Linkedin, Instagram } from 'react-feather';

const ContactUs = () => {  
  return (
    <div id="contact">
      <section className="grid lg:hidden mt-20 screen320px:w-[301px] screen414px:w-[361px] mx-auto bg-otherColors-01 shadow-boxShadow rounded-3xl py-10 screen414px:px-[30px]">
        <h2 className="text-center font-bold text-[28px] text-secondary-01 mb-8">
          Enviar mensagem
        </h2>
        <form className="grid justify-center screen320px:w-[95%] screen414px:w-[100%] mx-auto">
          <input
            type="text"
            placeholder="Primeiro nome"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <input
            type="text"
            placeholder="Ultimo nome"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <input
            type="email"
            placeholder="Email"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <input
            type="tel"
            placeholder="Número de telefone"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <div className="mb-10 screen320px:w-[75%] mx-auto screen414px:w-[100%]">
            <label htmlFor="description" className="text-primary-01">
              Escreva sua mensagem aqui!
            </label>
            <textarea
              id="description"
              className="w-[210px] screen360px:w-[98%] screen414px:w-[100%] py-[10px] px-1 rounded-lg border border-secondary-02 border-opacity-30 text-secondary-02 focus:outline-none focus:border-primary-02"
            />
          </div>
          <button className=" screen320px:w-[80%] screen414px:w-[100%] mx-auto bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01">
            Enviar
          </button>
        </form>
      </section>

      <section className="hidden lg:flex flex-col lg:flex-row mt-20 mx-auto w-full lg:w-[900px] bg-otherColors-01 shadow-boxShadow rounded-3xl py-10 px-5 lg:px-10 gap-10 lg:h-[500px] lg:gap-10 relative">
        <div className="w-full lg:w-[48%] bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-20 flex flex-col absolute left-[-50px] top-7">
          <div className="grid gap-5">
            <h2 className="text-white text-[24px] font-bold">Informações de Contato</h2>
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
          <div className="flex gap-5 mt-24">
            <Linkedin className="text-primary-02 cursor-pointer" />
            <Instagram className="text-primary-02 cursor-pointer" />
            <Mail className="text-primary-02 cursor-pointer" />
          </div>
        </div>

        <div className="w-full lg:w-[58%] lg:ml-96 lg:mt-10">
          <h2 className="text-center lg:text-left font-medium text-[28px] text-secondary-01 mb-8">
            Enviar mensagem
          </h2>
          <form className="grid gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Primeiro nome"
                className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
              />
              <input
                type="text"
                placeholder="Ultimo nome"
                className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
              />
              <input
                type="text"
                placeholder="Número de telefone"
                className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
              />
            </div>

            <textarea
              placeholder="Escreva sua mensagem aqui..."
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />

            <button className="w-full lg:w-[40%] bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01 mx-auto lg:mx-0">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
