import React, { Component } from "react";
import "./LogRegPage.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
class LogRegPage extends Component {
  render() {
    return (
      <div className="login-register-page">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default LogRegPage;
