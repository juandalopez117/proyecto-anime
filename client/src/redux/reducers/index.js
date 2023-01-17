const initialState = {
  allAnimes: [],
  animesByName: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_ANIME":
      return {
        ...state,
        allAnimes: action.payload,
      };
    case "GET_ANIME_BY_NAME":
      return {
        ...state,
        animesByName: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
