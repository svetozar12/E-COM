import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
export interface InputProps {
  isPasswordShort: boolean;
  showPassword: boolean;
  passwordValue: string;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        autoComplete="off"
        required={true}
        max={10}
        value={props.passwordValue}
        onChange={(e) => props.setPasswordValue(e.target.value)}
        name="name"
        type={props.showPassword ? "text" : "password"}
        id="password"
        placeholder="Enter your password"
        style={{ background: "transparent", minHeight: "31px" }}
        className="w-full h-full  md:text-lg rounded-lg outline-none bg-gray-200"
      />
      {props.isPasswordShort ? (
        <span className="absolute left-1 top-12 lg:top-14 text-red-800 md:text-lg text-sm ">
          Password is too short.
        </span>
      ) : (
        ""
      )}
      <span
        className=" text-gray-400 text-3xl"
        onClick={() => props.setShowPassword(!props.showPassword)}
      >
        {props.showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </span>
      {/* {isValidEmail ? ""
              : <span className="text-red-800 "> Email is not valid.</span>
            } */}
    </>
  );
};

export default Input;
