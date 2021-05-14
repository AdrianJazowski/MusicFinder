/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromApiByOneAlbum } from "../../api/apiCallFunctions";

import { AlbumListWrapper } from "./AlbumsListStyles";

const AlbumsList = ({ handleOpenDialogWithAlbumData }) => {
  const selectedAlbums = useSelector((state) => state.authorAlbums);

  const dispatch = useDispatch();
  return (
    <AlbumListWrapper>
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
    </AlbumListWrapper>
  );
};

export default AlbumsList;
