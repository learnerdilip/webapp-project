const initalState = [];

export default function homeReducer(state = initalState, action) {
  switch (action.type) {
    case "product/FETCHED": {
      console.log("PRODUCTS FETCHED STATE", action.payload);
      if (action.payload) {
        return action.payload.map(item => ({ ...item, quantity: 0 }));
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}
