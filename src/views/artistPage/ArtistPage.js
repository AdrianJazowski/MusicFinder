/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromApiByOneAlbum } from "../../api/apiCallFunctions";
import Popup from "../../components/popup/Popup";
import {
  ArtistPageWrapper,
  ArtistInfo,
  AlbumsWrapper,
  AlbumListUl,
} from "./ArtistPageStyles";

const ArtistPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const selectedAuthor = useSelector((state) => state.author);
  const selectedAlbums = useSelector((state) => state.authorAlbums);

  const dispatch = useDispatch();

  const handleOpenDialogWithAlbumData = () => {
    setOpenPopup(!openPopup);
  };

  const albumList = () => (
    <AlbumListUl>
      {selectedAlbums.map((album) => {
        const { collectionName, collectionId } = album;
        return (
          <li
            key={collectionId}
            onClick={() => {
              dispatch(getDataFromApiByOneAlbum(collectionId));
              handleOpenDialogWithAlbumData();
            }}
          >
            <p>{collectionName}</p>
          </li>
        );
      })}
    </AlbumListUl>
  );

  return (
    <ArtistPageWrapper>
      <ArtistInfo>
        <h1>{selectedAuthor.toUpperCase()}</h1>
      </ArtistInfo>
      <AlbumsWrapper>{albumList()}</AlbumsWrapper>
      <Popup
        handleOpenDialogWithAlbumData={handleOpenDialogWithAlbumData}
        openPopup={openPopup}
      />
    </ArtistPageWrapper>
  );
};

export default ArtistPage;
