import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";

export default class Home extends Component {
  componentDidMount() {
    console.log("Hello from the HOME");
    fetch("http://localhost:4000/products")
      .then(myJson => myJson.json())
      .then(data => {
        const productData = data
      });
  }
  render() {
    return (
      <div>
        <Header />
        <h2> This is the Home Page </h2>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    products: reduxState
  };
}

connect(mapStateToProps)(Home);
