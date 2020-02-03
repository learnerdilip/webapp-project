import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cart/action";

class ProductList extends Component {
    onClick = id => {
    const addedItem = this.props.products.find(item => item.id === id);
    this.props.dispatch(addToCart(addedItem));
  };

  render() {
    return (
      <div className="productcard">
        <img
          src={this.props.imgurl}
          alt={this.props.name}
          height="200rem"
          width="200rem"
        />
        <h4>{this.props.name}</h4>
        <h6>$ {this.props.price}</h6>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.onClick(this.props.itemId)}
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.home,
    cartItems: reduxState.cart
  };
}

export default connect(mapStateToProps)(ProductList);
