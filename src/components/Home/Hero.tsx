import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6">
        <div className="basis-7/12 w-full h-[80vh] flex justify-center items-center">
          <div>
            <p className="text-textColor text-xl lg:text-2xl xl:text-3xl font-semibold">
              I&apos;m
            </p>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e76c8] to-whiteColor   text-xl lg:text-3xl xl:text-4xl font-bold">
              Biplob Kumar Barmon
            </h1>

            <p className="white-stroke-title text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1 mb-6">
              MERN STACK DEVELOPER
            </p>
            <p className="text-textColor/70 text-lg lg:text-xl font-semibold">
              Passionate, dedicated and professional MERN stack Developer.
            </p>

            <button className="text-textColor/70 hover:text-textColor border border-primaryLight hover:border-[#1e76c8] px-8 py-2 mt-8 rounded-full">Download CV</button>
          </div>
        </div>
        <div className="basis-5/12 w-full h-[80vh] flex justify-center items-center">
          <div className="border border-primaryLight w-5/6 h-[40vh]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
