import React, { useState, useEffect } from "react";
import Navbar from "./Comps/Navbar";
import Carousel from "./Comps/Carousel";
import Newsletter from "./Comps/Newsletter";
import Footer from "./Comps/Footer";
import MOCK_DATA from "./Data/MOCK_DATA";
import DisplayItems from './Comps/DisplayItems'
function App() {

  console.log(...MOCK_DATA)
  return (<>
    <Navbar />
    <main className="flex flex-col  items-center justify-start w-screen overflow-x-hidden w-max-full bg-yellow-200">
      <Carousel />
      
<DisplayItems/>
{/* More Content */}
      <Newsletter />
      <Footer />
    </main>
  </>
  );
}

export default App;
