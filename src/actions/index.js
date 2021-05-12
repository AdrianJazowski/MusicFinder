/** @format */

import { actionsTypes } from "./actionsTypes";

export const getDataFromApiByPhrase = (data) => ({
  type: actionsTypes.GET_DATA_BY_PHRASE,
  payload: data,
});
export const putAuthorToStore = (author) => ({
  type: actionsTypes.GET_AUTHOR,
  payload: author,
});
export const getDataFromApiAboutOneAlbum = (album) => ({
  type: actionsTypes.GET_ALBUM,
  payload: album,
});
export const putDataAboutAlbumArtist = (data) => ({
  type: actionsTypes.GET_ALBUM_ARTIST,
  payload: data,
});
