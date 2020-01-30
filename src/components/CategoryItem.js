import React, { Component } from "react";

export default class CategoryItem extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <ul class="collection">
          {" "}
          <li class="collection-item">{this.props.id}</li>
        </ul>
      </div>
    );
  }
}
