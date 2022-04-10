import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "./Data/MOCK_DATA";
// components
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayItems from "./Components/Seasons";
import IndexPage from "./Pages/IndexPage/IndexPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/home"
          element={
            <>
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
          }
        />
      </Routes>
    </>
  );
}

export default App;
