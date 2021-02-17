import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.util";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import LogRegPage from "./pages/logRegPage/logRegPage.component";
import NotFound from "./pages/404notFound/notFound.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={LogRegPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
