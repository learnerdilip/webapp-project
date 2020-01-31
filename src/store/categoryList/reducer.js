const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "show/CATEGORY": {
      return [...state, ...action.payload];
    }

    default: {
      return state;
    }
  }
}
