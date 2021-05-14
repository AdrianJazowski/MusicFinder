/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  putDataAboutAlbumArtist,
  getDataFromApiAboutOneAlbum,
} from "../../actions";
import PopupList from "../popupList/PopupList";
import {
  PopupDialog,
  PopupWrapper,
  CloseBtn,
  PopupAlbumInformation,
  Information,
} from "./PopupStyles";

const Popup = ({ handleOpenDialogWithAlbumData, openPopup }) => {
  const selectedAlbumInformtion = useSelector((state) => state.albumInformtion);
  const { artworkUrl100, artistName, collectionName } = selectedAlbumInformtion;
  const dispatch = useDispatch();

  return (
    <PopupDialog open={openPopup}>
      <PopupWrapper>
        <CloseBtn
          onClick={() => {
            dispatch(getDataFromApiAboutOneAlbum([]));
            dispatch(putDataAboutAlbumArtist([]));
            handleOpenDialogWithAlbumData();
          }}
        />
        <PopupAlbumInformation>
          <Information>
            <h1>{artistName}</h1>
            <p>{collectionName}</p>
          </Information>
          <img src={artworkUrl100} alt={collectionName} />
        </PopupAlbumInformation>
        <PopupList />
      </PopupWrapper>
    </PopupDialog>
  );
};

export default Popup;
