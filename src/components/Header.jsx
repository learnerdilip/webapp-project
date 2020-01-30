import React, { Component } from "react";
import Cart from "./Cart";

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
