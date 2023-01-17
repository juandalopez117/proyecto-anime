const initialState = {
  allAnimes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_ANIME":
      return {
        ...state,
        allAnimes: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
