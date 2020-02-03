// export function

export function addToCart(item) {
  return {
    type: "ADDTOCART",
    payload: item
  };
}

export function deleteFromCart(name) {
  return {
    type: "cart/DELETE",
    payload: name
  };
}
