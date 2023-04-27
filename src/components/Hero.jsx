import React from "react";
import { heroData } from "../data.jsx";
import { Header } from "../components/index";
const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-[900px] py-12">
      {/*{ Header}*/}
      <Header />
      <div className="mx-auto container h-full relative">
        <div className="flex flex-col xl:flex-row h-full md:py-24">
          {/*  Text*/}
          <div className="text-center xl:text-left xl:absolute">
            <h1
              data-aos={"fade-down"}
              data-aos-delay={500}
              className="h1 xl:max-w-[700px] mb-6 lg:mb-12"
            >
              {title}
            </h1>
            <p
              data-aos={"fade-down"}
              data-aos-delay={600}
              className="lead xl:max-w-[380px] mb-6 lg:mb-12"
            >
              {subtitle}
            </p>
            <button
              data-aos={"fade-down"}
              data-aos-delay={700}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-delay={700}
            className="py-8 xl:absolute xl:button-10 xl:-right-16"
          >
            <img src={image} alt={"images"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
