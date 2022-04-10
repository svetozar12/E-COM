import "./index.css";
// deps
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// config
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// components
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import DisplayItems from "./Components/Seasons";
import Login from "./Pages/IndexPage/Login";
import Signin from "./Pages/IndexPage/Signin";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
