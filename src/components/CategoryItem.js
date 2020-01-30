import React, { Component } from "react";

export default class CategoryItem extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <p>{this.props.id}</p>
      </div>
    );
  }
}
