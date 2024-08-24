import { useContext, useRef, useState } from "react";
import { Themecontext } from "../App";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "antd";
import Auth from "./Auth";

export const Navbar = () => {
  const { signup, login, setSignup, setLogin } = useContext(Themecontext);

  const authref = useRef(new Auth());

  const signupBtns = () => {
    setSignup(!signup);
    setLogin(false);
  };

  const loginBtns = () => {
    setSignup(false);
    setLogin(!login);
  };

  return (
    <>
      <div className="navbar">
        <div className="insta">
          <img src="logo-insta.webp" alt="logo" width="35px" height="35px" />
        </div>
        <div className="signupbtn">
          <Button type="dashed" onClick={signupBtns}>
            Signup
          </Button>
        </div>
        <div className="loginbtn">
          <Button type="dashed" onClick={loginBtns}>
            Login
          </Button>
        </div>
      </div>
      <div className="signupbar">
        <div className="background-container">
          <img src="123.jpeg" alt="background" />
          <div className="form-container">
            {signup && <Signup auth={authref.current} />}
            {login && <Login auth={authref.current} />}
          </div>
        </div>
      </div>
    </>
  );
};
