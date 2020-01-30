const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "fetched/CARTITEMS": {
      return action.payload;
    }
    case "ADDTOCART": {
      // console.log("STATE in ADDTOCART", state, action.payload);
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
