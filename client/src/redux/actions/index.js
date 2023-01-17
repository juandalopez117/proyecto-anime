import axios from "axios";

export function getAllAnime() {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/anime`);
    return dispatch({
      type: "GET_ALL_ANIME",
      payload: json.data,
    });
  };
}

export function getAnimeByName(name) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/anime/${name}`);
    return dispatch({
      type: "GET_ANIME_BY_NAME",
      payload: json.data,
    });
  };
}
