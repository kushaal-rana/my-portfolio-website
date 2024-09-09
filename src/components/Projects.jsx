import React from "react";
import youtube from "../assets/portfolio/youtube.png";
import nlqtosql from "../assets/portfolio/nlqtosql.jpg";
import vis from "../assets/portfolio/DataVizualisation.png";
import parkinsons from "../assets/portfolio/parkinson.jpg";
import portfolio from "../assets/portfolio/portfolio.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: youtube,
      link: "https://github.com/kushaal-rana/youtube-backend",
      title: "YouTube Clone Backend",
      description:
        "A backend project for a YouTube clone, built with Node.js and Express.",
    },
    {
      id: 2,
      src: nlqtosql,
      link: "https://github.com/kushaal-rana/SBU-FHR",
      title: "Data Base Interaction ",
      description:
        "A Natural Language Query to SQL converter using Python and NLP techniques.",
    },
    {
      id: 3,
      src: vis,
      link: "https://github.com/kushaal-rana/CSE564FP",
      title: "Data Visualization Tool",
      description:
        "A web-based data visualization tool for exploring large datasets interactively.",
    },
    {
      id: 4,
      src: parkinsons,
      link: "https://github.com/kushaal-rana/parkinson",
      title: "Parkinson's Disease Research Application",
      description:
        "A tool for annotating gait patterns in Parkinson’s disease patients.",
    },
    {
      id: 5,
      src: portfolio,
      link: "https://github.com/kushaal-rana/my-portfolio-website",
      title: "Portfolio Website",
      description: "Website you currently are viewing.",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full h-full text-white relative z-10 lg:pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
          <h2 className="text-4xl lg:text-4xl font-bold inline mb-14 before:content-projects relative before:absolute before:opacity-100 before:-top-[2rem] before:hidden before:lg:block lg:mr-96">
            <span className="block border-b-4 border-gray-500 text-5xl lg:border-none text-slate-300">
              Projects
            </span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper w-full"
        >
          {portfolios.map(({ id, src, link, title, description }) => (
            <SwiperSlide key={id} className="flex justify-center">
              <div className="w-full max-w-sm md:max-w-md h-[450px] p-4 bg-gradient-to-r from-[#1e3b8a86] to-[#3b83f65b] shadow-lg shadow-gray-600 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-400 flex flex-col mx-auto">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-[150px] md:h-[200px] object-cover rounded-md duration-300 hover:opacity-90"
                />
                <div className="flex-grow flex flex-col justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-4">
                    {title}
                  </h3>
                  <p className="text-gray-200 mt-2 text-sm">{description}</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 px-4 md:px-6 py-2 md:py-3 m-4 duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold rounded-md text-center shadow-md hover:shadow-lg transition-all"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
