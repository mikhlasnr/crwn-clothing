import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import NotFound from "./pages/404notFound/notFound.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
