import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit lg:h-screen bg-gradient-to-b from-black to-slate-800 p-6 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full lg:pt-32">
        <div className="flex flex-col relative items-center lg:items-start">
          {/* Header with dynamic positioning */}
          <h2 className="text-4xl lg:text-4xl font-semibold inline mb-14 before:content-contact before:absolute before:opacity-100 before:-top-[2rem] before:hidden before:lg:block lg:-mr-7 text-slate-300">
            <span className="block border-b-4 border-gray-500 text-5xl lg:border-none lg:hidden ">
              Contact
            </span>
            <span className="hidden lg:block text-slate-300">Connect Now</span>
          </h2>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
