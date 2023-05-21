import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div id="main-container">
        <div id="logo-container">
          <div id="logo">LOGO</div>
          <div id="text-box">Text Will be displayed here</div>
        </div>
        <div id="form-container">
          <div id="form-flex">
            <span id="vendor"><p>Vendor</p></span>
            <span id="user"><p>User</p></span>
          </div>

          <span id="signin-msg">Sign In to your Account</span>
          <form method="POST">
            <input type="text" placeholder="username" />
            <br />
            <input type="password" placeholder="password" id="pass" />
          </form>
          <span id="forgot-password">Forgot password?</span>
          <br />

          <button id="signin">SIGN IN</button>
          <div id="createaccount">CreateAccount</div>
        </div>
      </div>
    </>
  );
};

export default Login;