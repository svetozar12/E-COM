import React from "react";
import { AiOutlineMail } from "react-icons/ai";
export interface InputProps {
  isValidEmail: boolean;
  nameValue: string;
  emailValue: string;
  setEmailValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        autoComplete="off"
        required={true}
        value={props.emailValue}
        onChange={(e) => props.setEmailValue(e.target.value)}
        name="email"
        type="text"
        id="email"
        placeholder="Enter your e-mail"
        style={{ background: "transparent", minHeight: "31px" }}
        className="w-full h-full  md:text-lg rounded-lg outline-none bg-gray-200"
      />

      {props.emailValue ? (
        ""
      ) : (
        <span className="text-gray-400 text-3xl">
          <AiOutlineMail />
        </span>
      )}
      {props.isValidEmail ? (
        ""
      ) : (
        <span className="text-red-800 "> Email is not valid.</span>
      )}
    </>
  );
};

export default Input;
