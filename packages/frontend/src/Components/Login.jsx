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
import { Form, Input } from "@E-COM/ui_lib";

const Login = ({ wantsLogIn, setWantsLogIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
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
      dispatch({ type: ActionType.SET_LOADING });
      // INVALID USER MESSAGE INSTEAD OF LOADING WHEN USER DOESNT EXIST!

      if (emailValue && passwordValue) {
        const res = await axios.post("http://localhost:5000/auth/login", {
          email: emailValue,
          password: passwordValue,
        });
        Cookies.set("token", res.data.Access_token, { expires: 3600 });

        const response = await axios.get("http://localhost:5000/auth/user", {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        });
        console.log(response.data.data.username, "login");
        navigate("./home", { replace: true });
        setEmailValue("");
        setPasswordValue("");
        dispatch({
          type: "SAVE_NAME",
          payload: response.data.data.username,
        });

        dispatch({ type: ActionType.LOGGED_IN });
        dispatch({ type: ActionType.REMOVE_LOADING });

        return true;
      }
    } catch (error) {
      dispatch({ type: ActionType.REMOVE_LOADING });
      setMessage(error);
      console.log(error);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      childrens={[
        <Input.Email
          emailValue={emailValue}
          setEmailValue={setEmailValue}
          isValidEmail={isValidEmail}
        />,
        <Input.Password
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
          isPasswordShort={isPasswordShort}
        />,
      ]}
    >
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
    </Form>
  );
};

export default React.memo(Login);
