import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  componentDidMount() {
    // console.log("FROM THE CART", this.props.cartitems);
  }
  render() {
    return (
      <div className="cart">
        <h7>
          cart has{" "}
          {this.props.cartitems ? this.props.cartitems.length : "NO ITEMS"}{" "}
          <Link to="/checkout">items</Link>
        </h7>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cartitems: reduxState.cart
  };
}

export default connect(mapStateToProps)(Cart);
