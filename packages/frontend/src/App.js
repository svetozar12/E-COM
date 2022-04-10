import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import MOCK_DATA from "./Data/MOCK_DATA";
import DisplayItems from "./Components/Seasons";
import DisplayProducts from "./Pages/DisplayProducts";
import Login from "./Pages/Login_Signin/Login";
import Log_Sign from "./Pages/Login_Signin/Log_Sign";

function App() {
  return (
    <>
    {/* <Log_Sign/> */}
      <Navbar />
      <main className="flex flex-col  items-center justify-start w-screen overflow-x-hidden min-h-screen  w-max-full bg-yellow-200">
        {/* {/* <Carousel /> */}
        <DisplayItems />
        <Newsletter />
        <Footer /> 
        Displaying all the products
        {/* <DisplayProducts /> */}
      </main>
    </>
  );
}

export default App;
