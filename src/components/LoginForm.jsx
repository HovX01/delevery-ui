import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const LoginForm = () => {
  return (

      <div className="p-[30px] flex justify-center items-center w-[70%] relative">
        <div
          className="absolute right-[40px] top-0"
          // onClick={}
        >
          <AiOutlineClose className="text-[20px] font-bold" />
        </div>
      </div>
  );
};

export default LoginForm;
