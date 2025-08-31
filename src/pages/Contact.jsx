import React from "react";

const Contact = () => {
  return (
    <>
      <section className="pt-55 pb-32 flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-4 items-center max-w-[562px] text-center">
          <h2 className="font-[600] text-5xl text-[#282938]">Contact Us</h2>
          <p className="text-[#282938] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <form className="container w-full px-19 py-14 bg-[#F4F6FC] rounded-xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="text-[18px] text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 w-full h-16 py-4 pl-8 border border-[#0000001F] rounded-[8px]"
              />
            </div>

            <div>
              <label htmlFor="name" className="text-[18px] text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full h-16 py-4 pl-8 border border-[#0000001F] rounded-[8px]"
              />
            </div>

            <div>
              <label htmlFor="name" className="text-[18px] text-black">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Provide context"
                className="mt-1 w-full h-16 py-4 pl-8 border border-[#0000001F] rounded-[8px]"
              />
            </div>

            <div>
              <label htmlFor="name" className="text-[18px] text-black">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Select subject"
                className="mt-1 w-full h-16 py-4 pl-8 border border-[#0000001F] rounded-[8px]"
              />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="name" className="text-[18px] text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your question here"
              rows="4"
              className="mt-1 w-full pt-4 pl-8 border border-[#0000001F] rounded-[8px]"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" bg-[#282938] border border-[#282938] mt-4 text-white py-4 px-16 rounded-full hover:bg-transparent transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
