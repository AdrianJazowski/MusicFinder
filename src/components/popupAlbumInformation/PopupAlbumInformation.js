/** @format */

import React from "react";
import { useSelector } from "react-redux";
import {
  Information,
  PopupAlbumInformationWrapper,
} from "./PopupAlbumInformationStyles";

const PopupAlbumInformation = () => {
  const selectedAlbumInformtion = useSelector((state) => state.albumInformtion);

  const { artworkUrl100, artistName, collectionName } = selectedAlbumInformtion;
  return (
    <PopupAlbumInformationWrapper>
      <Information>
        <h1 data-testid="artistName-test">{artistName}</h1>
        <p>{collectionName}</p>
      </Information>
      <img src={artworkUrl100} alt={collectionName} />
    </PopupAlbumInformationWrapper>
  );
};

export default PopupAlbumInformation;
