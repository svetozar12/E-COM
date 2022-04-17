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
import { endpoint_enums } from "@E-COM/sdk/dist";

function App() {
  // React.useEffect(() => {
  //   (async () => {
  //     const data = await sdk.auth(endpoint_enums.login, {
  //       email: "ivan@.com",
  //       password: "ivan",
  //     });
  //     console.log(data);
  //   })();
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/home"
          element={
            <AuthProvider>
              <main className="flex flex-col  items-center justify-start w-screen overflow-x-hidden min-h-screen  w-max-full bg-yellow-200">
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
      </Routes>
    </>
  );
}

export default App;
