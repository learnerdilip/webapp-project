import React, { Component } from "react";
import Cart from "./Cart";
// import Checkout from "./Checkout";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h4 className="hometitle">THE WEBSHOP APP</h4>
        <Link to="/login" className="loginname">
          Log in
        </Link>
        <Cart />
      </div>
    );
  }
}
