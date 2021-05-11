/** @format */

import { actionsTypes } from "./actionsTypes";

export const getDataFromApiByAuthorAction = (data) => ({
  type: actionsTypes.GET_DATA_BY_AUTHOR,
  payload: data,
});
export const getAuthorToStore = (author) => ({
  type: actionsTypes.GET_AUTHOR,
  payload: author,
});
export const getDataAboutOneAlbum = (album) => ({
  type: actionsTypes.GET_ALBUM,
  payload: album,
});
export const getDataAboutAlbumArtist = (data) => ({
  type: actionsTypes.GET_ALBUM_ARTIST,
  payload: data,
});
