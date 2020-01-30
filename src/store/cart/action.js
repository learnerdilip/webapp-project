// export function

export function addToCart(item) {
  console.log("product clicked id:", item.id);
  return {
    type: "ADDTOCART",
    payload: item
  };
}
