import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "./Data/MOCK_DATA";
// components
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import DisplayItems from "./Components/Seasons";
// pages
import DisplayProducts from "./Pages/DisplayProducts";
import Login from "./Pages/IndexPage/Login";
import IndexPage from "./Pages/IndexPage/IndexPage";

function App() {
  return (
    <>
      <Link to="/">
        <IndexPage />
      </Link>
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
