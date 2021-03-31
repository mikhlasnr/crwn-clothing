import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishhableKey =
    "pk_test_51IafvmDbANvUV10kFs6JzaAVCzYvBz8MwnIzVsQG9ARP850bpTUrnhLzt6kOtzv9RdSPRZIKUQmFcC6wDWjS2pF700hgluCje2";
  const onToken = token => {
    console.log(token);
    alert("Payment Succsessful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishhableKey}
    />
  );
};

export default StripeCheckoutButton;
