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
        <Header />
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
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Some good stuff will come here!</h5>
                <p class="grey-text text-lighten-4">
                  
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Important Links</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      You will go to som other page later
                    </a>
                
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2020 Copyright Dilip at codaisseur
              <a class="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
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
