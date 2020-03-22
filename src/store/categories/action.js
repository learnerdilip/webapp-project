import data from "../../../src/db.json";

export function categoriesFetched(data) {
  return {
    type: "categories/FETCHED",
    payload: data
  };
}

export function fetchCategories() {
  // console.log("----__________", data);

  return (dispatch, getState) => {
    // fetch("http://localhost:4000/categories")
    //   .then(myJson => myJson.json())
    //   .then(data => {
    //     console.log(data, "THE DATA FROM ACTIONS AFTER FETCH");
    //     dispatch(categoriesFetched(data));
    //   });
    dispatch(categoriesFetched(data.categories));
  };
}
