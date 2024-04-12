import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(path)}>{text}</button>
    </>
  );
};

export default Button;
