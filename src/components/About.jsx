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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          repellendus mollitia quasi, adipisci maxime enim possimus totam eius
          et quas quis corporis exercitationem repellat nemo in sint sequi
          saepe. Nam? Voluptatibus officiis illo modi nostrum dolor assumenda,
          sequi in fugit accusamus? Obcaecati aperiam dicta blanditiis, eligendi
          mollitia molestias repellat aliquam similique doloremque voluptatibus
          qui repudiandae. Est aperiam aliquid eius expedita. Tempora aperiam
          perspiciatis laudantium aut, officiis libero eaque cum deserunt ipsam
          ex! Nulla totam corrupti facere, maiores fugiat itaque repudiandae
          reiciendis possimus facilis ab libero id excepturi consequuntur
          reprehenderit ex.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rerum
          repudiandae tempora quis omnis! Asperiores eveniet dolorem sunt, ut
          dolor incidunt necessitatibus placeat in fuga culpa earum ea odit
          tempore consequuntur cupiditate sint, nobis ab! Nesciunt, sunt. Nobis
          eum nemo obcaecati, perspiciatis, voluptatem vitae fugiat ipsum iusto
          neque modi saepe!
        </p>
      </div>
    </div>
  );
};

export default About;
