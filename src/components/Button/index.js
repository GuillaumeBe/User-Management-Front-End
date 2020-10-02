import React from "react";
import Loader from "react-spinners/ClipLoader";

import { StyledButton } from "./style.js";

const Button = ({ children, isLoading, type, onClick, isSecondary }) => {
  return (
    <StyledButton
      isSecondary={isSecondary}
      disabled={isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <Loader color="white" size={10} /> : children}
    </StyledButton>
  );
};

export default Button;
