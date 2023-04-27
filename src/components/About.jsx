import React from "react";
import { aboutData } from "../data.jsx";
const About = () => {
  const { image, subtitle, title } = aboutData;
  return (
    <div
      className="container mx-auto lg:py-32 xl:py-0 py-24"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="xl:flex xl:justify-center xl:items-center xl:flex-row bg-pink-100 rounded-[50px] min-h-[560px]">
        <div
          className="mx-16 flex-1"
          data-aos={"zoom-in-left"}
          data-oas-deley={450}
        >
          <img src={image} alt="about" />
        </div>
        <div className="flex-1 flex-col text-center flex xl:text-left">
          <h1
            className="h2 px-9 sm:px-9 mb:px-12 lg:px-16 xl:px-0"
            data-aos={"fade-up"}
            data-aos-deley={475}
          >
            {title}
          </h1>
          <br />
          <p
            className="lead text-[15px] px-14 sm:px-14 mb:px-24 lg:px-28 xl:px-0 xl:pr-24"
            data-aos={"fade-up"}
            data-aos-deley={500}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
