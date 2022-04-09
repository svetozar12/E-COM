import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import MOCK_DATA from "./Data/MOCK_DATA";
import DisplayItems from './Components/Seasons'
import DisplayProducts from "./Pages/DisplayProducts";

function App() {



  console.log(...MOCK_DATA)
  return (<>

    <Navbar />
    <main className="flex flex-col  items-center justify-start w-screen overflow-x-hidden min-h-screen  w-max-full bg-yellow-200">
      <Carousel />

      <DisplayItems />






      <Newsletter />
      <Footer />

      {/* Displaying all the products */}
      {/* <DisplayProducts /> */}
    </main>
  </>
  );
}

export default App;
