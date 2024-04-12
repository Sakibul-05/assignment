import React from "react";
import Button from "../components/Button";
import "../CSS/pagesCSS/Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <h1>Welcome to PopX</h1>
      <p>
        This is a space for developers of all skill levels and backgrounds to
        collabor.
      </p>
      <div className="buttonField">
        <Button text={"Create Account"} path="/create-account"></Button>
        <Button text={"Already Registered? Login"} path="/login"></Button>
      </div>
    </div>
  );
};

export default Landing;
