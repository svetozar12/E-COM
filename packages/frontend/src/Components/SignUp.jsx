import React, { useState, useEffect } from "react";
import { Form, Input } from "@E-COM/ui_lib";

// Auth
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../redux/types";

const SignUp = ({ wantsLogIn, setWantsLogIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNameShort, setIsNameShort] = useState(false);
  const [isPasswordShort, setIsPasswordShort] = useState(false);

  const LoggedIn = useSelector((state) => state.setReducer.LoggedIn);
  const name = useSelector((state) => state.setReducer.name);
  const isLoading = useSelector((state) => state.setReducer.isLoading);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  React.useEffect(() => {
    console.log(passwordValue);
  }, [passwordValue]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsValidEmail(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isValidEmail]);

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setIsNameShort(true)
  //   }, 1500);
  //   return () => clearTimeout(timeout)
  // }, [nameValue])

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsPasswordShort(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isPasswordShort]);
  const location = useLocation();

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

      // if (nameValue.length <= 4) {
      //   setIsNameShort(true);
      //   return false
      // }
      // Start Loading
      dispatch({ type: ActionType.SET_LOADING });
      if (nameValue && emailValue && passwordValue) {
        const res = await axios.post("http://localhost:5000/auth/register", {
          username: nameValue,
          email: emailValue,
          password: passwordValue,
        });
        Cookies.set("token", res.data.Access_token, { expires: 3600 });
        navigate("./home", { replace: true });
        setNameValue("");
        setEmailValue("");
        setPasswordValue("");
        dispatch({ type: ActionType.LOGGED_IN });
        dispatch({ type: ActionType.SAVE_NAME, payload: nameValue });
        dispatch({ type: ActionType.REMOVE_LOADING });
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      childrens={[
        <Input.Input
          isNameShort={isNameShort}
          nameValue={nameValue}
          setNameValue={setNameValue}
        />,
        <Input.Email
          isValidEmail={isValidEmail}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
        />,
        <Input.Password
          isPasswordShort={isPasswordShort}
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
        />,
      ]}
    />
  );
};

export default React.memo(SignUp);
