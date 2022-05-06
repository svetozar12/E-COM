import React, { useState, useEffect } from "react";

// Auth
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../redux/types";
import { AiOutlineMail, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNameShort, setIsNameShort] = useState(false);
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const [user, setUser] = useState({
    nameValue: "",
    passwordValue: "",
    emailValue: "",
  });
  const state = useSelector((state) => state.setReducer);
  // console.log(state.LoggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
      if (re.test(user.emailValue)) {
        console.log("valid email");
      } else {
        console.log("email not valid!");
        setIsValidEmail(false);
      }

      if (passwordValue.length <= 4) {
        setIsPasswordShort(true);
        return false;
      }

      dispatch({
        type: ActionType.SET_LOADING,
      });

      if (user.nameValue && user.emailValue && user.passwordValue) {
        const res = await axios.post("http://localhost:5000/auth/register", {
          username: user.nameValue,
          email: user.emailValue,
          password: user.passwordValue,
        });
        Cookies.set("token", res.data.Access_token, { expires: 3600 });
        navigate("./home", {
          replace: true,
        });
        setUser({ nameValue: "", emailValue: "", passwordValue: "" });

        dispatch({
          type: ActionType.LOGGED_IN,
        });
        dispatch({
          type: ActionType.SAVE_NAME,
          payload: user.nameValue,
        });
        dispatch({
          type: ActionType.REMOVE_LOADING,
        });
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  };

  return (
    <form
      autoComplete="off"
      className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center "
    >
      <div className=" md:w-72 w-11/12   h-3/5 flex flex-col  justify-center gap-8 items-center ">
        {/* Name input */}
        <div className="relative w-full h-1/4 ">
          <input
            autoComplete="on"
            required="required"
            value={user.nameValue}
            onChange={(e) => setUser({ nameValue: e.target.value })}
            name="name"
            type="text"
            id="name"
            placeholder="Enter your username"
            className="w-full h-full  md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />
          {isNameShort ? (
            <span className="absolute left-1 top-12 lg:top-14 text-red-800 md:text-lg text-sm ">
              Password is too short.
            </span>
          ) : (
            ""
          )}

          {user.nameValue ? (
            ""
          ) : (
            <span className="absolute top-1.5 lg:top-3 right-2 text-gray-400 text-3xl">
              <BsPersonBadge />
            </span>
          )}
        </div>
        {/* Email input */}
        <div className="relative w-full h-1/4">
          <input
            autoComplete="off"
            required="required"
            value={user.emailValue}
            onChange={(e) => setUser({ emailValue: e.target.value })}
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-full h-full md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />
          {isValidEmail ? (
            ""
          ) : (
            <span className="absolute left-1 top-12 lg:top-14 text-red-800 text-sm md:text-lg h-2 ">
              {" "}
              Email is not valid.
            </span>
          )}
          {user.nameValue ? (
            ""
          ) : (
            <span className="absolute top-1.5  lg:top-3 right-2 text-gray-400 text-3xl">
              <AiOutlineMail />
            </span>
          )}
        </div>
        {/* Password input */}
        <div className="relative w-full h-1/4 ">
          <input
            autoComplete="off"
            required="required"
            max={10}
            value={user.passwordValue}
            onChange={(e) => setUser({ passwordValue: e.target.value })}
            name="name"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="w-full h-full  md:text-lg rounded-lg px-2 outline-none bg-gray-200 "
          />
          {isPasswordShort ? (
            <span className="absolute left-1 top-12 lg:top-14 text-red-800 md:text-lg text-sm ">
              Password is too short.
            </span>
          ) : (
            ""
          )}
          <span
            className="absolute cursor-pointer top-1.5  lg:top-3 right-2 text-gray-400 text-3xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div></div>
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
