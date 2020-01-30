import React, { Component } from "react";
import Cart from "./Cart";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>The Header</h1>
        <Cart />
      </div>
    );
  }
}
