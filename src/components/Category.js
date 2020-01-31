import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/categories/action";
import CategoryItem from "./CategoryItem";

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div className="categoryList">
        <h4>The categories</h4>
        {this.props.categories.map(cat => (
          <CategoryItem id={cat.id} name={cat.name} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("THE STATE IN CATEGORY:", reduxState);
  return {
    categories: reduxState.categories
  };
}

export default connect(mapStateToProps)(Category);
