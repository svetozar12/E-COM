import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ifLogin = () => {
  // add refresh token later
  // checks if cookie with name token exists and return it
  return Cookies.get("token");
};

const AuthProvider = (children) => {
  // if cookie token doesnt exist redirect to page /
  let auth = ifLogin();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  // gets the children we pass which is always should be the protected page
  return children.children;
};

export default AuthProvider;
