import React from "react";
import { featuresData } from "../data";
import { BsArrowBarLeft, BsArrowRight } from "react-icons/bs";
import { Element } from "react-scroll";

const Features = () => {
  const { title, subtitle, list } = featuresData;
  return (
    <section className="my-[60px] xl:my-[130px]">
      <div className="mx-auto container">
        {/*{Text}*/}
        <Element name="features">
          <div className="flex flex-col items-center justify-center text-center gap-y-4 xl:gap-y-8">
            <h1 className="h2" data-aos={"fade-down"} data-aos-deley={500}>
              {title}
            </h1>
            <p
              className="lead md:px-24 lg:px-64 xl:px-72"
              data-aos={"fade-down"}
              data-aos-deley={600}
            >
              {subtitle}
            </p>
          </div>
        </Element>
        {/*Card*/}
        <div className="gap-[50px] py-24">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            {list.map((item, index) => (
              <div
                className={
                  "xl:max-w-[530px] mx-auto max-w-[270px] py-16 items-center xl:py-32"
                }
                data-aos={"zoom-in-left"}
                data-aos-deley={item.delay}
                key={item.title + index}
              >
                <div className="xl:flex-row relative flex flex-col items-center justify-center gap-y-12 xl:gap-x-12">
                  <div className="hidden xl:block absolute -right-2 -z-10">
                    <img src={item.bgImage} alt="" />
                  </div>
                  {/*Image*/}
                  <div
                    className="max-w-[120px] xl:max-w-[340px]"
                    data-aos={"zoom-in-right"}
                    data-aos-deley={item.delay}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  {/*Text*/}
                  <div className="xl:space-y-4 xl:max-w-[280px]">
                    <h5 className="text-[24px]">{item.title}</h5>
                    <p className="text-[16px] italic font-light mr-8">
                      {item.description}
                    </p>
                    <div className="flex items-center group gap-x-2">
                      <a href="#">{item.linkText}</a>
                      <BsArrowRight className="text-accent-primary group-hover:ml-5 text-[20px] transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
