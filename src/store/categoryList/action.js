export function categorize(items) {
  // console.log("THE category contains", items);
  return {
    type: "show/CATEGORY",
    payload: items
  };
}
