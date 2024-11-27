const ContactUs = () => {
  return (
    <section id="contact" className="mt-20 flex flex-col lg:flex-row items-center justify-between mx-auto w-[60%] bg-otherColors-01 shadow-boxShadow rounded-3xl py-10">
      <div className="lg:w-[48%] w-full bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-6 flex flex-col justify-between">
        <h2 className="text-white text-[24px] font-bold mb-6">Contact Info</h2>
        <div className="flex flex-col gap-4 text-white">
          <div className="flex items-center gap-4">
            <MapPin className="text-primary-02" />
            <p>Av ali na esquina, 15 - RJ</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary-02" />
            <p>bit01@contact.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary-02" />
            <p>+55 3333 3333</p>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <Linkedin className="text-primary-02 cursor-pointer" />
          <Instagram className="text-primary-02 cursor-pointer" />
          <Mail className="text-primary-02 cursor-pointer" />
        </div>
      </div>

      <div className="lg:w-[48%] w-full px-5">
        <h2 className="text-center font-bold text-[28px] text-secondary-01 mb-8">
          Send a message
        </h2>
        <form className="grid gap-5">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />
          </div>

          <textarea
            id="description"
            className="w-[250px] screen360px:w-[98%] screen414px:w-[100%] py-[10px] px-1 rounded-lg border border-secondary-02 border-opacity-30 text-secondary-02 focus:outline-none focus:border-primary-02"
          />

          <button className="w-[40%] bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
