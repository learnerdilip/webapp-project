import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";

class categoryPage extends Component {
  render() {
    console.log("this.props.categoryitems.id", this.props.categoryitems);
    return (
      <div>
        {/* <Header /> */}
        <Link to="/">GO HOME</Link>
        <h4>The category Page! (different component)</h4>
        {this.props.categoryitems.map(product => {
          return (
            <div className="productcard">
              <img
                src={product.imageUrl}
                alt={product.name}
                height="250rem"
                width="250rem"
              />
              <h4>{product.name}</h4>
              <h6>$ {product.price}</h6>
            </div>
          );
        })}
        <Link to="/">GO HOME</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categoryitems: reduxState.categorylist
  };
}

export default connect(mapStateToProps)(categoryPage);
