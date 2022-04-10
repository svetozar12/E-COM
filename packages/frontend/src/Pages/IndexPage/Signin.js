import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

const Signin = ({ wantsLogIn, setWantsLogIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // const [isValidEmail, setIsValidEmail] = useState(true)
  const [isPasswordShort, setIsPasswordShort] = useState(false);

  // React.useEffect(() => {
  //     console.log(passwordValue)
  // }, [passwordValue])

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setIsValidEmail(true)
  //   }, 1500);
  //   return () => clearTimeout(timeout)
  // }, [isValidEmail])

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsPasswordShort(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isPasswordShort]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL VALIDATION

    if (passwordValue.length <= 4) {
      setIsPasswordShort(true);
    } else if (passwordValue.length > 10) {
    }

    console.log("submited");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center "
    >
      <div className=" md:w-72 w-11/12   h-2/4 flex flex-col  justify-center gap-8 items-center ">
        <div className="relative w-full h-1/4 ">
          <input
            autoComplete="off"
            required="required"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            name="name"
            type="text"
            id="name"
            placeholder="Enter your username"
            className="w-full h-full  md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />

          {nameValue ? (
            ""
          ) : (
            <span className="absolute top-2 md:top-2 lg:top-3 right-2 text-gray-400 text-3xl">
              <AiOutlineMail />
            </span>
          )}
          {/* {isValidEmail ? ""
              : <span className="text-red-800 "> Email is not valid.</span>
            } */}
        </div>

        <div className="relative w-full h-1/4">
          <input
            required="required"
            maxLength={10}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type={showPassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Password"
            className="w-full h-full md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />

          <span
            className="absolute cursor-pointer top-2 md:top-2 lg:top-3 right-2 text-gray-400 text-3xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          {isPasswordShort ? (
            <span className="text-red-800 ">Password is too short.</span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        <p className="text-blue-800 cursor-pointer text-sm text-center gap-2">
          Forgot password?
        </p>
        <div className="flex md:w-64  gap-2 text-sm">
          <p>Dont't have an account? </p>
          <span className="text-blue-900 cursor-pointer  border-black">
            Make one.
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-4/5 h-12 bg-blue-800 rounded-xl text-2xl capitalize  text-white"
      >
        SIGNUP
      </button>
    </form>
  );
};

export default React.memo(Signin);
