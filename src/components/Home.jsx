import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit md:h-screen w-full bg-gradient-to-b from-black to-gray-800 pt-20 md:pt-2"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        {/* Image - now first on mobile */}
        <div className="order-1 md:order-2 mb-8 md:mb-0 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-[300px] h-auto md:w-[500px] mx-auto"
          />
        </div>

        {/* Text content - now second on mobile */}
        <div className="flex flex-col justify-center h-full order-2 md:order-1 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold text-white text-center md:text-left">
            I'm a Full Stack Developer
          </h2>
          <p className="text-slate-500 font-normal text-lg py-4 max-w-md text-center md:text-left">
            I turn ideas into seamless digital experiences with clean, efficient
            code. Passionate about building innovative solutions that solve
            real-world problems. I have a strong background in web development
            and programming languages.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSFill size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
