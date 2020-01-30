import React, { Component } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h4>The new Amaxon</h4>
        <Cart />
        
      </div>
    );
  }
}
