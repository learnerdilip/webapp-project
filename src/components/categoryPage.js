import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class categoryPage extends Component {
  render() {
    console.log("this.props.categoryitems.id", this.props.categoryitems);
    return (
      <div>
        <h4>The category</h4>
        {this.props.categoryitems.map(product => {
          return (
            <div className="productcard">
              <img
                src={product.imageUrl}
                alt={product.name}
                height="200rem"
                width="200rem"
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
