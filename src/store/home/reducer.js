const initalState = [];
export default function homeReducer(state = initalState, action) {
  switch (action.type) {
    case "product/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
