import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { fetchProducts } from "../store/home/action";
import ProductList from "./ProductList";
import Category from "./Category";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    // if (!this.props.products) console.log(this.props.products);
    return (
      <div>
        <Header/>
        <hr />
        <h5> Welcome to your shop! </h5>
        <br />
        <div className="home">
          {this.props.products.map(item => (
            <ProductList
              name={item.name}
              imgurl={item.imageUrl}
              intock={item.inStock}
              price={item.price}
              itemId={item.id}
            />
          ))}
        </div>

        <Category />
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
