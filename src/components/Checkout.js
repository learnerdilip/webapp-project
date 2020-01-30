import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Home from "./Home";

class Checkout extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go to HOME PAGE!</Link>
        <h2>Your choices are awesome!</h2>
        {this.props.cartItems.map(item => (
          <h2>
            {item.name} ....... {item.price}
          </h2>
        ))}
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cartItems: reduxState.cart
  };
}

export default connect(mapStateToProps)(Checkout);
