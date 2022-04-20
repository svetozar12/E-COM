import * as React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="text-red-600">{props.label}</button>;
};

export default Button;
