const initialState = [];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
