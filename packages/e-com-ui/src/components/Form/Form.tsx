import React from "react";
// Icons

export interface FormProps {
  handleSubmit: (e: any) => Promise<any>;
  childrens: any[];
  button_label: string;
}

const Form = (props: FormProps) => {
  return (
    <form
      autoComplete="off"
      className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center "
    >
      <div className=" md:w-72 w-11/12   h-3/5 flex flex-col  justify-center gap-8 items-center ">
        {props.childrens.map((element) => {
          return (
            <div
              style={{ padding: "0.6rem", margin: "1rem" }}
              className="relative w-full h-1/4 flex justify-center items-center bg-gray-200 rounded-lg p-4"
            >
              {element}
            </div>
          );
        })}
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
        onClick={props.handleSubmit}
        type="submit"
        className="w-4/5 h-12 bg-blue-800 rounded-xl text-2xl capitalize  text-white"
      >
        {props.button_label}
      </button>
    </form>
  );
};

export default Form;
