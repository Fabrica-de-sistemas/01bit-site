const ContactUs = () => {
  return (
    <section className="mt-20 screen320px:w-[301px] screen414px:w-[361px] mx-auto bg-otherColors-01 shadow-boxShadow rounded-3xl py-10  screen414px:px-[30px]">
      <h2 className="text-center font-bold text-[28px] text-secondary-01 mb-8">
        Send a message
      </h2>
      <form className="grid justify-center screen320px:w-[95%] screen414px:w-[100%] mx-auto">
        <input
          type="text"
          placeholder="First Name"
          className="screen320px:w-[75%] mx-auto screen414px:w-[100%] py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
        />
        <input
          type="email"
          placeholder="Email Adress"
          className="screen320px:w-[75%] mx-auto screen414px:w-[100%] py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
        />
        <div className="mb-10 screen320px:w-[75%] mx-auto screen414px:w-[100%]">
          <label htmlFor="description" className="text-primary-01">
            Write your message here...
          </label>
          <textarea
            id="description"
            className="w-[250px] screen360px:w-[98%] screen414px:w-[100%] py-[10px] px-1 rounded-lg border border-secondary-02 border-opacity-30 text-secondary-02 focus:outline-none focus:border-primary-02"
          />
        </div>
        <button className=" screen320px:w-[80%] screen414px:w-[100%] mx-auto bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
