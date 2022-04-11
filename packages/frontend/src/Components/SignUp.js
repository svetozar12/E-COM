import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = ({ wantsLogIn, setWantsLogIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailVlaue] = useState("");
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

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setIsPasswordShort(false);
  //   }, 1500);
  //   return () => clearTimeout(timeout);
  // }, [isPasswordShort]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // EMAIL VALIDATION

      if (passwordValue.length <= 4) {
        setIsPasswordShort(true);
        return false;
      }
      console.log(emailValue);
      if (nameValue && emailValue && passwordValue) {
        const res = await axios.post("http://localhost:5000/auth/register", {
          username: nameValue,
          email: emailValue,
          password: passwordValue,
        });
        Cookies.set("token", res.data.Access_token, { expires: 3600 });
        // redirect to localhost3000/:userid
        setNameValue("");
        setEmailVlaue("");
        setPasswordValue("");
        console.log("submited", res);
        return true;
      }
      return false;
    } catch (error) {}
  };

  return (
    <form
      // onSubmit={handleSubmit}
      className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center "
    >
      <input
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        type="text"
      />
      <input
        value={emailValue}
        onChange={(e) => setEmailVlaue(e.target.value)}
        type="email"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
      />

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-4/5 h-12 bg-blue-800 rounded-xl text-2xl capitalize  text-white"
      >
        SIGNUP
      </button>
    </form>
  );
};

export default React.memo(SignUp);
