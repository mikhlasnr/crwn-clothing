import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
