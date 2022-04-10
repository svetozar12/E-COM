import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import DisplayItems from "./Components/Seasons";
import Login from "./Pages/Login_Signin/Login";
import Signin from "./Pages/Login_Signin/Signin";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
