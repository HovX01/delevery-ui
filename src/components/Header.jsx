import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as L } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <header
      className="mb-6 md:mb-12 relative lg:mb-20 xl:mb-24 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto flex justify-between items-center gap-x-[120px]">
        <div
          className="cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="" />
        </div>
        {/* Mobile Responsive*/}
        <div className="lg:hidden text-3xl text-primary cursor-pointer transition-all">
          {showMenu ? (
            <AiOutlineClose onClick={() => setShowMenu(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setShowMenu(true)} />
          )}
        </div>
        {/*  Desktop Responsive*/}
        <div className="hidden lg:flex">
          <ul className="flex gap-x-8 font-bold text-[16px]">
            <li className="cursor-pointer hover:text-gray-300">
              <L
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Features
              </L>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <L
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Testimonials
              </L>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <L
                activeClass="active"
                to="contract"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contract
              </L>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <L
                activeClass="active"
                to="sign-up"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Sign Up
              </L>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary hidden lg:block text-black bg-white hover:bg-accent-primary hover:text-white">
          Github
        </button>
      </div>
      <div
        className={`${
          showMenu ? "max-h-52" : "max-h-0"
        }  absolute lg:hidden bg-accent-tertiary right-0 left-0
          flex-col w-full top-16 font-bold overflow-hidden text-white transition-all rounded`}
      >
        <ul className="px-6 py-6 space-y-4">
          <li className="cursor-pointer hover:text-accent-primary_hover transition-all">
            <L
              activeClass="active"
              to="features"
              className="text-white"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Features
            </L>
          </li>
          <li className="cursor-pointer hover:text-accent-primary_hover transition-all">
            <L
              activeClass="active"
              to="testimonial"
              className="text-white"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Testimonials
            </L>
          </li>
          <li className="cursor-pointer hover:text-accent-primary_hover transition-all">
            <L
              activeClass="active"
              to="contract"
              className="text-white"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Contract
            </L>
          </li>
          <li className="cursor-pointer hover:text-accent-primary_hover transition-all">
            <L
              activeClass="active"
              to="sign-up"
              className="text-white"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Sign Up
            </L>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
