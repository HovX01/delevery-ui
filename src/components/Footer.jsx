import React from "react";
import { footerData } from "../data.jsx";

const Footer = () => {
  const { logo, address, email, list1, list2, list3, phone, socialList } =
    footerData;
  return (
    <section data-aos={"fade-up"} data-aos-delay={900} className="my-32">
      <div className="container mx-auto">
        <div className="space-y-14 flex flex-col xl:flex-row items-center justify-center">
          {/*  logo*/}
          <div className="space-y-16 w-[45%] flex flex-col items-center justify-center xl:items-start">
            <img src={logo} alt="logo" />
            <div className="w-[250px] space-y-6">
              <div className="text-center xl:text-left font-bold text-primary">
                {address}
              </div>
              <div className="">
                <div className="text-center xl:text-left font-light italic">
                  {email}
                </div>
                <div className="text-center xl:text-left font-light italic">
                  {phone}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Container List*/}
            <div className="flex flex-1 flex-col xl:flex-row gap-x-44 space-y-10 xl:space-y-0 text-center xl:text-left">
              {/*  list 1*/}
              <div className="space-y-8">
                <div className="font-black text-primary">About</div>
                <ul className="space-y-4 text-center xl:text-left">
                  {list1.map((item, i) => {
                    return (
                      <li
                        className="font-bold text-primary cursor-pointer hover:text-accent-primary_hover transition-all"
                        key={item.name + i}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*  List 2*/}
              <div className="space-y-8">
                <div className="font-black text-primary">Help</div>
                <ul className="space-y-4 text-center xl:text-left">
                  {list2.map((item, i) => {
                    return (
                      <li
                        className="font-bold text-primary cursor-pointer hover:text-accent-primary_hover transition-all"
                        key={item.name + i}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*  Social Media List*/}
              <div className="space-y-8">
                <div className="font-black text-primary">Social Media</div>
                <div className="flex gap-x-4">
                  {socialList.map((item, i) => {
                    return (
                      <div className="w-[40px] h-[40px] rounded-full bg-opacity-20 bg-gray-500 flex items-center justify-center hover:bg-accent-secondary_hover transition-all cursor-pointer">
                        <div className="text-white text-xl">{item.icon}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
