// src/store/reducer.js
import { combineReducers } from "redux";
import home from "./home/reducer";
import categories from "./categories/reducer";
import cart from "./cart/reducer";
import categorylist from "./categoryList/reducer";  

export default combineReducers({
  home,
  categories,
  cart,
  categorylist
  // we can add more "slice" subreducers here later on...
});
