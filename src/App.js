import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import LogRegPage from "./pages/logRegPage/logRegPage.component";
import NotFound from "./pages/404notFound/notFound.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={LogRegPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
