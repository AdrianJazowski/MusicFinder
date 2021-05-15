/** @format */

import "@testing-library/jest-dom/extend-expect";
import {
  getDataFromApiAboutOneAlbum,
  getDataFromApiByPhrase,
  putAuthorToStore,
  putDataAboutAlbumArtist,
} from "./index";

import { actionsTypes } from "./actionsTypes";

describe("testing actions", () => {
  it("should create an action getDataFromApiByPhrase", () => {
    const payload = "data from api";
    const expectedAction = {
      type: actionsTypes.GET_DATA_BY_PHRASE,
      payload: payload,
    };
    expect(getDataFromApiByPhrase(payload)).toEqual(expectedAction);
  });
  it("should create an action putAuthorToStore", () => {
    const payload = "author name";
    const expectedAction = {
      type: actionsTypes.GET_AUTHOR,
      payload: payload,
    };
    expect(putAuthorToStore(payload)).toEqual(expectedAction);
  });
  it("should create an action getDataFromApiAboutOneAlbum", () => {
    const payload = "album data";
    const expectedAction = {
      type: actionsTypes.GET_ALBUM,
      payload: payload,
    };
    expect(getDataFromApiAboutOneAlbum(payload)).toEqual(expectedAction);
  });
  it("should create an action putDataAboutAlbumArtist", () => {
    const payload = "data about songs in album";
    const expectedAction = {
      type: actionsTypes.GET_ALBUM_ARTIST,
      payload: payload,
    };
    expect(putDataAboutAlbumArtist(payload)).toEqual(expectedAction);
  });
  it("shouldn't create an action putDataAboutAlbumArtist", () => {
    const payload = "data about songs in album";
    const expectedAction = {
      type: actionsTypes.GET_ALBUM,
      payload: payload,
    };
    expect(putDataAboutAlbumArtist(payload)).not.toEqual(expectedAction);
  });
});
