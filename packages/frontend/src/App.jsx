import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "./Data/MOCK_DATA";
// components
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayItems from "./Components/Seasons";
import IndexPage from "./Pages/IndexPage";
import AuthProvider from "./utils/auth";
import { UnprotectedAuthProvider } from "./utils/auth";
import Loading from "./Components/Loading";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const state = useSelector((state) => state.setReducer);
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      if (!Cookies.get("token")) return false;
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:5000/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const ifLogin = () => {
    // add refresh token later
    if (!Cookies.get("token")) return false;

    // checks if cookie with name token exists and return it
    return true;
  };
  React.useEffect(() => {
    (async () => {
      getUser();
      const isLogedIn = ifLogin();
      if (isLogedIn) {
        const user = await getUser();
        console.log(user.username, "user");
        dispatch({ type: "LOGGED_IN" });
        dispatch({ type: "SAVE_NAME", payload: user.username });
        dispatch({ type: "REMOVE_LOADING" });
        console.log("user is loged in");
      } else {
        console.log("user is not log in");
      }
    })();
  }, []);
  return (
    <>
      {state.isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <>
            <Route
              path="/"
              element={
                <UnprotectedAuthProvider>
                  <IndexPage />
                </UnprotectedAuthProvider>
              }
            />
            <Route
              path="/home"
              element={
                <AuthProvider>
                  <main className="font-body flex flex-col  items-center justify-start w-screen overflow-x-hidden min-h-screen  w-max-full bg-yellow-200">
                    <Navbar />
                    <Carousel />
                    <DisplayItems />
                    <Newsletter />
                    <Footer />
                    {/*!!!DONT DISPLAY ALL PRODUCTS ON HOME PAGE create page products and display them here <DisplayProducts /> */}
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
