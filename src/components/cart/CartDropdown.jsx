import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./CartDropdown.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
