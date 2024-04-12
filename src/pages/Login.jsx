import React from "react";
import "../CSS/pagesCSS/Login.css";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="Login">
      <h2>Login</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        accusantium placeat eius atque similique amet, quisquam facilis
        quibusdam explicabo pariatur sequi doloremque fuga itaque maiores
        molestiae voluptate obcaecati temporibus alias.
      </p>
      <div className="userInputFields">
        <InputField
          type="email"
          fieldName="Email Address"
          placeholder="Enter email address"
        ></InputField>
        <InputField
          type="password"
          fieldName="Password"
          placeholder="Enter password"
        ></InputField>
      </div>
      <div className="buttonField">
        <Button text="Login" path="/profile"></Button>
      </div>
    </div>
  );
};

export default Login;
