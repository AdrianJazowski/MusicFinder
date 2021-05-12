/** @format */

import { actionsTypes } from "../actions/actionsTypes";

/** @format */
const initialState = {
  author: "",
  authorAlbums: [],
  album: [],
  albumInformtion: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.GET_DATA_BY_PHRASE:
      return {
        ...state,
        authorAlbums: payload,
      };
    case actionsTypes.GET_AUTHOR:
      return {
        ...state,
        author: payload,
      };
    case actionsTypes.GET_ALBUM:
      return {
        ...state,
        album: payload.slice(1),
      };
    case actionsTypes.GET_ALBUM_ARTIST:
      return {
        ...state,
        albumInformtion: payload,
      };
    default:
      return state;
  }
};
export default reducer;
