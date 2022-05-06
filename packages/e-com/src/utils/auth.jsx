import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthProvider = (children) => {
  // if cookie token doesnt exist redirect to page /
  let auth = Cookies.get("token");
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // gets the children we pass which is always should be the PROTECTED page
  return children.children;
};

const UnprotectedAuthProvider = (children) => {
  // if cookie token doesnt exist redirect to page /
  let auth = Cookies.get("token");
  let location = useLocation();
  if (auth) {
    return <Navigate to={`/home`} state={{ from: location }} replace />;
  }

  // gets the children we pass which is always should be the UNPROTECTED page
  return children.children;
};

export { UnprotectedAuthProvider };
export default AuthProvider;
