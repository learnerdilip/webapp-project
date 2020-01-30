export function categoriesFetched(data) {
  return {
    type: "categories/FETCHED",
    payload: data
  };
}

export function fetchCategories() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/categories")
      .then(myJson => myJson.json())
      .then(data => {
        console.log(data, "THE DATA FROM ACTIONS AFTER FETCH");
        dispatch(categoriesFetched(data));
      });
  };
}
