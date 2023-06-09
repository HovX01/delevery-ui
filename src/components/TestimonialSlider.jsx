import React from "react";
import { Testimonials } from "./index.js";
import { Element } from "react-scroll";

const TestimonialSlider = () => {
  return (
    <Element name={"testimonial"}>
      <section className="relative">
        <div className="container-fluid mx-auto">
          <div
            className="bg-accent-primary min-h-[600px]"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px] items-center overflow-hidden">
              <h2 className="h2 text-white text-center mb-[80px]">
                {" "}
                Testimonials{" "}
              </h2>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default TestimonialSlider;
