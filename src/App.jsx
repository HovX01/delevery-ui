import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Hero,
  Footer,
  TestimonialSlider,
  Features,
  About,
  Top,
} from "./components";
const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className="relative">
      <Hero />
      <Top />
      <About />
      <Features />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};
export default App;
