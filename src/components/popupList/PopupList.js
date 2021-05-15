/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { PopupListWrapper, Song } from "./PopupListStyles";

const PopupList = ({ selectedAlbum }) => {
  return (
    <PopupListWrapper data-testid="popupList-test">
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
