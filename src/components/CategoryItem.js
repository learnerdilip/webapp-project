import React, { Component } from "react";
import { connect } from "react-redux";
import { categorize } from "../store/categoryList/action";
import { Link } from "react-router-dom";

class CategoryItem extends Component {
  showcategory(catId) {
    const categoryProducts = this.props.productList.filter(
      item => item.categoryId === catId
    );
    this.props.dispatch(categorize(categoryProducts));
  }
  render() {
    
    return (
      <Link
        to={`/category/${this.props.id}` + this.props.id}
        className="cat-item"
      >
        <div onClick={() => this.showcategory(this.props.id)}>
          {this.props.name}
        </div>
        <ul class="collection"> </ul>
      </Link>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    productList: reduxState.home
  };
}

export default connect(mapStateToProps)(CategoryItem);
