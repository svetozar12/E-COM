import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { ExternalLink } from "react-external-link";
// Auth
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionType } from "../redux/types";


const Login = ({ wantsLogIn, setWantsLogIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  // React.useEffect(() => {
  //     console.log(passwordValue)
  // }, [passwordValue])



  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsValidEmail(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isValidEmail]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsPasswordShort(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isPasswordShort]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // EMAIL VALIDATION
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(emailValue)) {
        console.log("valid email");
      } else {
        console.log("email not valid!");
        setIsValidEmail(false);
      }

      if (passwordValue.length <= 4) {
        setIsPasswordShort(true);
        return false;
      }
      dispatch({ type: ActionType.SET_LOADING })
      // INVALID USER MESSAGE INSTEAD OF LOADING WHEN USER DOESNT EXIST!

      if (emailValue && passwordValue) {

        const res = await axios.post(
          "http://localhost:5000/auth/login",
          {
            email: emailValue,
            password: passwordValue,
          }
        )
        Cookies.set("token", res.data.Access_token, { expires: 3600 });

        navigate("./home", { replace: true });
        setEmailValue("");
        setPasswordValue("");

        dispatch({ type: ActionType.LOGGED_IN })
        dispatch({ type: ActionType.REMOVE_LOADING })

        return true
      }

    }

    catch (error) {
      setMessage(error)
      console.log(message)

    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center "
    >

      <div className=" md:w-72 w-11/12   h-2/4 flex flex-col  justify-center gap-8 items-center ">
        {/* <span className="text-red-600 text-xl">{message}</span> */}
        <div className="relative w-full h-1/4 ">
          <input
            autoComplete="off"
            required="required"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            name="email"
            type="text"
            id="email"
            placeholder="Enter your e-mail"
            className="w-full h-full  md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />

          {emailValue ? (
            ""
          ) : (
            <span className="absolute top-2 md:top-2 lg:top-3.5 right-2 text-gray-400 text-3xl">
              <AiOutlineMail />
            </span>
          )}
          {isValidEmail ? (
            ""
          ) : (
            <span className="text-red-800 "> Email is not valid.</span>
          )}
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
            className="absolute cursor-pointer top-2 md:top-2 lg:top-3.5 right-2 text-gray-400 text-3xl"
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
        LOGIN
      </button>
    </form>
  );
};

export default React.memo(Login);
