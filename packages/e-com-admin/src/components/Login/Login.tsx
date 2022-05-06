import React from "react";
import css from "./Login.module.css";
import style from "../../styles/styles";
import { css as inline } from "@emotion/css";

const Login = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={inline`width:60%;padding:0 1rem`}>
          <style.FormHeader>Sign In</style.FormHeader>
          <style.Paragraph className={inline`margin-left:0.3rem`}>
            Enter your email and password to sign in!
          </style.Paragraph>
        </div>
        <style.Form>
          <style.Label>Email*</style.Label>
          <style.Input placeholder="example@.com" type="email" />
          <style.Label>Password*</style.Label>
          <style.Input placeholder="Min. 8 characters" type="password" />
          <div
            className={inline`display:flex;justify-content:space-between;padding:0.5rem;margin-bottom:1rem;`}
          >
            <div>
              <input type="checkbox" /> <label>Remember me</label>
            </div>
            <style.Href>Forgot password?</style.Href>
          </div>
          <style.Button>Login</style.Button>
        </style.Form>
      </div>
      <div className={css.right}></div>
    </div>
  );
};

export default Login;
