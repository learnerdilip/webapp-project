export function productsFetched(data) {
  return {
    type: "product/FETCHED",
    payload: data
  };
}

export function fetchProducts() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/products")
      .then(myJson => myJson.json())
      .then(data => {
        // console.log(data, "THE DATA FROM ACTIONS AFTER FETCH");
        dispatch(productsFetched(data));
      });
  };
}
