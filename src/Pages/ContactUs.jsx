import { MapPin, Mail, Phone, Linkedin, Instagram } from "react-feather";

const ContactUs = () => {
  return (
    <>
      <section
        id="contact-desktop"
        className="hidden md:flex mt-20 mx-auto w-full md:w-[60%] bg-otherColors-01 shadow-boxShadow rounded-3xl py-10 px-5 md:px-10 flex-col md:flex-row md:items-start md:justify-between"
      >
        <div className="w-[48%] bg-primary-03 text-grayColors-01 rounded-3xl px-8 py-6 flex-col justify-between">
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

        <div className="w-full md:w-[48%] px-5 md:px-0">
          <h2 className="text-center md:text-left font-bold text-[28px] text-secondary-01 mb-8">
            Send a message
          </h2>
          <form className="grid gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              placeholder="Write your message here..."
              className="w-full py-[10px] px-4 border-b-2 border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02 placeholder-opacity-30 focus:outline-none focus:border-primary-02"
            />

            <button className="w-full md:w-[40%] bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01 mx-auto md:mx-0">
              Send
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="md:hidden mt-20 screen320px:w-[301px] screen414px:w-[361px] mx-auto bg-otherColors-01 shadow-boxShadow rounded-3xl py-10  screen414px:px-[30px]">
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
            placeholder="Email Address"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
          />
          <div className="mb-10 screen320px:w-[75%] mx-auto screen414px:w-[100%]">
          <label
            htmlFor="description"
            className="block text-primary-01 mb-2"
          >
            Write your message here...
          </label>
            <textarea
              id="description"
              className="w-[250px] screen360px:w-[98%] screen414px:w-[100%] py-[10px] px-1 rounded-lg border border-secondary-02 border-opacity-30 text-secondary-02 focus:outline-none focus:border-primary-02"
            />
          </div>
          <button className="screen320px:w-[75%] screen414px:w-[100%] mx-auto bg-primary-03 py-[10px] px-4 text-center rounded-3xl text-grayColors-01">
            Send
          </button>

        </form>
      </section>
    </>
  );
};

export default ContactUs;
