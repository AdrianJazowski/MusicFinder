/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { PopupListWrapper, Song } from "./PopupListStyles";

const PopupList = () => {
  const selectedAlbum = useSelector((state) => state.album);

  return (
    <PopupListWrapper>
      {selectedAlbum.map((song) => {
        const { trackName, trackTime } = song;
        return (
          <Song key={trackName}>
            <p>{trackName}</p>
            <p>{trackTime}</p>
          </Song>
        );
      })}
    </PopupListWrapper>
  );
};

export default PopupList;
