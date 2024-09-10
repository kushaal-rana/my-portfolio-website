import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white  lg:pt-52 relative z-10"
    >
      {/* Container for the About Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center lg:items-center w-full h-full md:h-[110%] relative">
        {/* About Section Header */}
        <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-4xl font-semibold inline  mb-3 before:content-about relative before:absolute before:opacity-100 before:-top-[2.4rem] before:hidden before:lg:block lg:mr-52">
              <span className="block border-b-4 border-gray-500 text-5xl lg:hidden">
                About
              </span>
              <span className="hidden lg:block text-slate-300">Kushaal</span>
            </h2>
          </div>
        </div>
        <p className="text-xl mt-10">
          I am Kushaal Rana, a passionate and highly motivated software engineer
          with a strong foundation in Computer Science, currently pursuing my
          Master's at SUNY Stony Brook University. With a robust academic
          background, holding a 3.8 GPA, and hands-on experience across diverse
          technologies, I excel in full-stack development and building
          innovative, scalable solutions. I have 2 years of work experience at
          <a
            href="https://www.linkedin.com/company/techigai/posts/?feedView=all"
            target="_blank"
          >
            <b className="text-slate-400"> Techigai Private Limited </b>
          </a>
          , where I led projects that delivered impactful results, from building
          feature-rich vendor portals for over 10,000 users to deploying
          microservices with .NET Core, AWS, and Docker. My experience spans
          developing RESTful APIs, optimizing cloud infrastructures, and
          enhancing database performance, contributing to system efficiency and
          exceptional user experiences.
        </p>
        <br />
        <p className="text-xl">
          I have a proven ability to tackle complex problems, demonstrated
          through my work in fields like machine learning and data science. My
          projects range from creating healthcare applications powered by AI to
          developing real-time communication platforms with technologies like
          React, Node.js, and Flask. I'm driven by a curiosity for cutting-edge
          technologies and a commitment to continuous learning and eager to
          showcase my skills and share my work by solving complex challenges and
          delivering results., I am constantly looking for opportunities where I
          can contribute to impactful projects and collaborate with
          forward-thinking teams that prioritize innovation and growth,
        </p>
      </div>
    </div>
  );
};

export default About;
