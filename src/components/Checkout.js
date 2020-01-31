import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Home from "./Home";

class Checkout extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go to HOME PAGE!</Link>
        <h3>Thank you for visiting!</h3>

        <table className="checkoutTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* {this.props.cartItems.map(item => (
          <h4>
            {item.name} ....... {item.price}
          </h4>
        ))} */}
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
