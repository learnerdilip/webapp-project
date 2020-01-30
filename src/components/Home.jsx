import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { fetchProducts } from "../store/home/action";
import ProductList from "./ProductList";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    // if (!this.props.products) console.log(this.props.products);
    return (
      <div className="home">
        <Header />
        <h2> This is the Home Page </h2>
        {this.props.products.map(item => (
          <ProductList
            name={item.name}
            imgurl={item.imageUrl}
            intock={item.inStock}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("THE REDUX STATE IN HOME:", reduxState);
  return {
    products: reduxState.home
  };
}

export default connect(mapStateToProps)(Home);
