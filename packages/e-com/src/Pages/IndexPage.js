import React, { useState } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
const IndexPage = () => {
  const [wantsLogIn, setWantsLogIn] = useState(true);

  return (
    <main className="font-body flex justify-center flex-col md:flex-row items-center   h-screen w-screen bg-gray-200">
      {/*Image  */}
      <div
        style={{
          backgroundImage: `url(https://pixabay.com/get/g031d791a78458f88a077efabcd6ab1ce48a6ca7d686865c90bc0326796cb30e4175f69a5ad6276fb9f315820bb051fb1.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative hidden md:flex flex-col justify-center items-center  w-4/5 h-48 md:w-2/5 md:h-5/6  bg-black"
      >
        <div className="absolute w-full h-full bg-black opacity-40 "></div>
        <h1 className="absolute text-lg  z-10 top-4 left-8">LOGO</h1>
        <h2 className="z-10 text-6xl w-2/3 font-extrabold  text-white ">
          IT'S ALL ABOUT YOU.
        </h2>
      </div>
      <div className="flex flex-col justify-start items-center w-5/6 h-5/6  md:w-2/5 md:h-5/6 bg-white ">
        {/* Pick one */}
        <div className="flex flex-col justify-center gap-2 mt-5 items-center w-3/6 md:w-3/6 h-20">
          <div className="w-full flex flex-col items-center gap-6 md:gap-2 justify-evenly">
            <div className="flex w-full">
              <button className="w-3/6" onClick={(curr) => setWantsLogIn(curr)}>
                Log-in
              </button>
              <button
                className="w-3/6"
                onClick={(curr) => setWantsLogIn(!curr)}
              >
                Sign-up
              </button>
            </div>
            <div className="w-full h-1 flex justify-start items-center rounded-full bg-slate-400">
              <div
                className={`h-full w-1/2 bg-blue-600 rounded-full shadow-md shadow-blue-600 ${
                  wantsLogIn
                    ? "-translate-x-0 ease-in-out duration-500"
                    : "translate-x-full ease-in-out duration-500"
                }`}
              ></div>
            </div>
          </div>
        </div>
        {wantsLogIn ? (
          <Login wantsLogIn={wantsLogIn} setWantsLogIn={setWantsLogIn} />
        ) : (
          <SignUp wantsLogIn={wantsLogIn} setWantsLogIn={setWantsLogIn} />
        )}
      </div>
    </main>
    //
  );
};

export default React.memo(IndexPage);
