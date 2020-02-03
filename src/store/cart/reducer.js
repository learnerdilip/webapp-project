const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "fetched/CARTITEMS": {
      return action.payload;
    }

    case "ADDTOCART": {
      if (action.payload.quantity === 0) {
        action.payload.quantity = 1;
        return state.concat(action.payload);
      } else {
        const updatedCart = state.map(item => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
            return item;
          } else {
            return item;
          }
        });
        return updatedCart;
      }
    }

    case "cart/DELETE": {
      const newCart = [...state.filter(item => item.name !== action.payload)];
      return newCart;
    }
    default: {
      return state;
    }
  }
}
