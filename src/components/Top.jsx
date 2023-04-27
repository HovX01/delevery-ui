import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Top = () => {
  const [showTop, setTop] = useState(false);
  let y = window.innerHeight;
  let full_y = document.body.clientHeight;
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setPercent((window.scrollY / (full_y - y)) * 100);
    if (window.scrollY > 150) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${showTop ? "" : "hidden"}
      fixed bottom-[40px] right-[20px] md:w-[60px] md:h-[60px] md:bottom-[45px] md:right-[45px] z-[999] border-2 w-[40px] h-[40px] rounded-full flex
      items-center justify-center cursor-pointer transition-all hover:scale-125 border-accent-primary group`}
    >
      <AiOutlineArrowUp className="group-hover:scale-150 transition-all" />
    </div>
  );
};
export default Top;
