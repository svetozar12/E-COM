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
// import * as mySdk from "@E-COM/sdk";
import Loading from "./Components/Loading";
import { useSelector } from "react-redux";
import { sdk, endpoints } from "@E-COM/sdk";
let data;

function App() {
  const isLoading = useSelector((state) => state.setReducer.isLoading);
  const init = async () => {
    data = await sdk.auth(endpoints.login, {
      email: "divan@.com",
      password: "divan",
    });
    console.log(data);
  };

  React.useEffect(() => {
    init();
  });

  return (
    <>
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
