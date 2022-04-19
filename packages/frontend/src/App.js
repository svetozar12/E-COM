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
import IndexPage from "./Pages/IndexPage";
import AuthProvider from "./utils/auth";
import Loading from "./Components/Loading";
import { useSelector } from "react-redux";
import * as ui from "@E-COM/e-com-ui";
//to import every component
// or
//
// import { Button } from "@E-COM/e-com-ui"; for single import
console.log(ui.Button);
function App() {
  const isLoading = useSelector((state) => state.setReducer.isLoading);

  return (
    <>
      {/* <ui.Button>click me</ui.Button>*/}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <>
            <Route path="/" element={<IndexPage />} />
            <Route
              path="/home"
              element={
                <AuthProvider>
                  <main className="font-body flex flex-col  items-center justify-start w-screen overflow-x-hidden min-h-screen  w-max-full bg-yellow-200">
                    <Navbar />
                    {/* {/* <Carousel /> */}
                    <DisplayItems />
                    <Newsletter />
                    <Footer />
                    Displaying all the products
                    {/* <DisplayProducts /> */}
                  </main>
                </AuthProvider>
              }
            />
          </>
        </Routes>
      )}
    </>
  );
}

export default App;
