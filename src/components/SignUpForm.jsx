import React, { useState } from "react";

const SignUpForm = () => {
  const [isToggleForm, setToggleForm] = useState(false);
  return <div className={`${isToggleForm ? "" : "hidden"}`}>SignUp</div>;
};

export default SignUpForm;
