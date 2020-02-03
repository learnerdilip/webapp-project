import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart, addToCart } from "../store/cart/action";

class Checkout extends Component {
  removeCartItem(itemname) {
    this.props.dispatch(deleteFromCart(itemname));
  }

  addCartItem(itemname) {
    // this.props.dispatch()
  }

  render() {
    const total = this.props.cartItems.reduce((sum, item) => {
      return sum + parseInt(item.price) * item.quantity;
    }, 0);
    // console.log("TOTAL", total);
    return (
      <div>
        <Link to="/">Go to HOME PAGE!</Link>
        <h3>Thank you for visiting!</h3>

        <table className="checkoutTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Unit Price</th>
              <th>Item Quantity</th>
              <th>Item total</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price}</td>
                  <button onClick={() => this.removeCartItem(item.name)}>
                    -
                  </button>
                  <button
                    onClick={() => this.props.dispatch(addToCart(item.name))}
                  >
                    +
                  </button>
                </tr>
              );
            })}
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th></th>
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
