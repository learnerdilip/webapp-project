import React, { Component } from "react";

export default class ProductList extends Component {
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
      </div>
    );
  }
}
