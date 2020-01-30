import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
