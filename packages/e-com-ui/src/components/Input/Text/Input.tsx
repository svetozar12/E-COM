import { BsPersonBadge } from "react-icons/bs";
import React from "react";

export interface InputProps {
  isNameShort: boolean;
  nameValue: string;
  setNameValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        autoComplete="on"
        required={true}
        value={props.nameValue}
        onChange={(e) => props.setNameValue(e.target.value)}
        name="name"
        type="text"
        id="name"
        placeholder="Enter your username"
        style={{ background: "transparent", minHeight: "31px" }}
        className="w-full h-full  md:text-lg rounded-lg outline-none bg-gray-200"
      />
      {props.isNameShort ? (
        <span className="absolute left-1 top-12 lg:top-14 text-red-800 md:text-lg text-sm ">
          Password is too short.
        </span>
      ) : (
        ""
      )}

      {props.nameValue ? (
        ""
      ) : (
        <span className=" text-gray-400 text-3xl">
          <BsPersonBadge />
        </span>
      )}
    </>
  );
};

export default Input;
