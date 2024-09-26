import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import HeroBgAnimation from "../Utils/HeroBgAnimation/index.js"; // Import the HeroBgAnimation component

const Details = {
  name: "Kushaal Rana",
  roles: [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Designer",
    "Software Engineer",
    "Software Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/kushaal-rana",
  resume:
    "https://drive.google.com/file/d/1Ngi4Kg6sAeYdTQU-2vvXesH5ZcoQEsZ6/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/kushaal-rana/",
  insta: "https://www.instagram.com/kushaalrana/",
};

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit md:h-screen w-full bg-gradient-to-b from-black to-gray-800 pt-20 md:pt-2 relative overflow-hidden"
    >
      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row relative z-10 ">
        {/* Image Container with Animation Background */}
        <div className="relative order-1 md:order-2 md:mx-10 mb-8 md:mb-0 mt-12 md:mt-0">
          {/* Background Animation behind the Image */}
          <div className="absolute -top-[150px] -left-40 w-full h-full flex items-center justify-center">
            <HeroBgAnimation />
          </div>

          {/* Image */}
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-[300px] h-auto md:w-[400px] mx-auto object-cover border-4 border-violet-800 shadow-lg shadow-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-blue-500 relative z-10"
          />
        </div>

        {/* Text content - now second on mobile */}
        <div className="flex flex-col justify-center h-full order-2 md:order-1 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold text-white text-center md:text-left">
            Hi, I'm {Details.name}
          </h2>
          <div className="text-2xl sm:text-3xl font-semibold text-purple-600 text-center md:text-left mb-4">
            A{" "}
            <TypeAnimation
              sequence={[...Details.roles.flatMap((role) => [role, 1000])]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-slate-500 font-normal text-lg py-4 max-w-md text-center md:text-left">
            I turn ideas into seamless digital experiences with clean, efficient
            code. Passionate about building innovative solutions that solve
            real-world problems. I specialize in developing modern web
            applications and integrating AI-driven solutions to create dynamic,
            user-centric experiences, focusing on performance, scalability, and
            innovation.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/16ZP5CcgCQ4gkRm21cv46p-SnSmhRbTXG/view" // Replace with your actual drive link
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-7 py-3.5 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:translate-x-2 duration-300">
                <FaArrowAltCircleRight size={20} className="ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
