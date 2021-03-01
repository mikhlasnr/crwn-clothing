import React from "react";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";
import CustomButton from "../customButton/CustomButton";
import "./CartDropdown.scss";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
