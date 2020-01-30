import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cart/action";

class ProductList extends Component {
  onClick = id => {
    const addedItem = this.props.products.find(item => item.id === id);
    console.log("Addeditem", addedItem);
    this.props.dispatch(addToCart(addedItem));
  };

  render() {
    return (
      <div>
        <img
          src={this.props.imgurl}
          alt={this.props.name}
          height="120rem"
          width="120rem"
        />
        <h4>{this.props.name}</h4>
        <h6>{this.props.price}</h6>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.onClick(this.props.itemId)}
        >
          BUY
        </button>
        {/* <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img height="120rem"
          width="120rem" src={this.props.imgurl}>
          <span class="card-title">{this.props.name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>{this.props.name}</p>
          <button
          className="waves-effect waves-light btn"
          onClick={() => this.onClick(this.props.itemId)}
        >
          BUY
        </button>
        </div>
      </div>
    </div>
  </div> */}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("IN CART", reduxState);
  return {
    products: reduxState.home,
    cartItems: reduxState.cart
  };
}

export default connect(mapStateToProps)(ProductList);
