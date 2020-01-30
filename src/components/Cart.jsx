import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  componentDidMount() {
    // console.log("FROM THE CART", this.props.cartitems);
  }
  render() {
    return (
      <div>
        <h1>
          cart has{" "}
          {this.props.cartitems ? this.props.cartitems.length : "NO ITEMS"}{" "}
          items
        </h1>
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
