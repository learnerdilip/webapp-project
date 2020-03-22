import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cart/action";

class ProductList extends Component {
  onClick = id => {
    const addedItem = this.props.products.find(item => item.id === id);
    this.props.dispatch(addToCart(addedItem));
  };

  render() {
    const { imgurl, name, price, itemId } = this.props;
    return (
      <div className="productcard">
        <img src={imgurl} alt={name} height="200rem" width="200rem" />
        <h4>{name}</h4>
        <h6>$ {price}</h6>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.onClick(itemId)}
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
