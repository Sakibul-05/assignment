import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <h2>Create Your PopX account</h2>
      <div className="userInputFields">
        <InputField
          type="text"
          fieldName="Full Name"
          placeholder="Enter your full name"
        ></InputField>
        <InputField
          type="number"
          fieldName="Phone number"
          placeholder="Enter your phone number"
        ></InputField>
        <InputField
          type="email"
          fieldName="Email address"
          placeholder="Enter your email"
        ></InputField>
        <InputField
          type="password"
          fieldName="Password"
          placeholder="Enter your password"
        ></InputField>
        <InputField
          type="text"
          fieldName="Company name"
          placeholder="Enter your company name"
        ></InputField>
      </div>
      <div className="buttonField">
        <Button text="Create Account" path="/profile"></Button>
      </div>
    </div>
  );
};

export default CreateAccount;
