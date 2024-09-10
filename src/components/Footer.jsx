import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import LinkedInIcon from "../assets/linkedin.png"; // Correct import for image
import Instagram from "../assets/instagram.png"; // Correct import for image

const Footer = () => {
  return (
    <div className="w-full py-8 flex justify-center bg-gray-900 text-gray-300">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-6 px-4">
        {/* Logo */}
        <div className="flex flex-col items-center text-2xl font-semibold text-purple-500 hover:text-cyan-500">
          Kushaal Rana <br />
          <div className="font-medium text-lg text-purple-600">
            <a
              href="mailto:ranakushaal@gmail.com"
              className="hover:text-cyan-500"
            >
              ranakushaal@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4 font-bold">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg hover:text-cyan-500 transition cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg hover:text-cyan-500 transition cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-lg hover:text-cyan-500 transition cursor-pointer"
          >
            Skills
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-5">
          <div className="flex gap-4 mt-4">
            <a
              href="https://linkedin.com/in/kushaal-rana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex  mt-3">
            <a
              href="https://www.instagram.com/kushaalrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <img src={Instagram} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center mt-4 font-bold">
          &copy; 2024 Kushaal Rana. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
