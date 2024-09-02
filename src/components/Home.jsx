import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-28 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-orange-300 py-4 max-w-md">
            I turn ideas into seamless digital experiences with clean, efficient
            code. Passionate about building innovative solutions that solve
            real-world problems. I have a strong background in web development
            and programming languages.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSFill size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-[300px] h-auto md:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
