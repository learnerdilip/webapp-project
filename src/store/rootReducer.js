// src/store/reducer.js
import { combineReducers } from "redux";
import home from "./home/reducer";

export default combineReducers({
  home
  // we can add more "slice" subreducers here later on...
});
