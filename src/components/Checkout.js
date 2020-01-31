import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Checkout extends Component {
  render() {
    const total = this.props.cartItems.reduce((sum, item) => {
      return sum + parseInt(item.price);
    }, 0);
    console.log("TOTAL", total);
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
          <thead>
            <tr>
              <th></th>
              <th>Total</th>
              <th>{total}</th>
            </tr>
          </thead>
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
