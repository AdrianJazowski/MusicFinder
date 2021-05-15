/** @format */

import axios from "axios";
import {
  putDataAboutAlbumArtist,
  getDataFromApiAboutOneAlbum,
  getDataFromApiByPhrase,
} from "../actions";
import { convertSongDuration } from "./helperFunctions";

export const getDataFromApiByAuthor = (currentPhraseToApi) => {
  return (dispatch) => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${currentPhraseToApi}&entity=album`
      )
      .then((response) => {
        const albumCollections = response.data.results.map((data) => {
          const newAlbumsList = {
            collectionName: data.collectionName,
            collectionId: data.collectionId,
          };
          return newAlbumsList;
        });
        dispatch(getDataFromApiByPhrase(albumCollections));
      })
      .catch((err) => console.log(err));
  };
};

export const getDataFromApiByOneAlbum = (collectionId) => {
  return (dispatch) => {
    axios
      .get(`https://itunes.apple.com/lookup?id=${collectionId}&entity=song`)
      .then((response) => {
        const album = response.data.results.map((data) => {
          const oneSong = {
            trackName: data.trackName,
            trackTime: convertSongDuration(data.trackTimeMillis),
          };
          return oneSong;
        });
        const albumInformation = response.data.results[0];

        dispatch(getDataFromApiAboutOneAlbum(album));
        dispatch(putDataAboutAlbumArtist(albumInformation));
      })
      .catch((err) => console.log(err));
  };
};
