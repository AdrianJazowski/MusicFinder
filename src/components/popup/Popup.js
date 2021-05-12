/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  putDataAboutAlbumArtist,
  getDataFromApiAboutOneAlbum,
} from "../../actions";
import {
  PopupDialog,
  PopupList,
  PopupWrapper,
  Song,
  CloseBtn,
  PopupAlbumInformation,
  Information,
} from "./PopupStyles";

const Popup = ({ handleOpenDialogWithAlbumData, openPopup }) => {
  const selectedAlbum = useSelector((state) => state.album);
  const selectedAlbumInformtion = useSelector((state) => state.albumInformtion);
  const { artworkUrl100, artistName, collectionName } = selectedAlbumInformtion;
  const dispatch = useDispatch();

  const popupList = () => (
    <PopupList>
      {selectedAlbum.map((song) => {
        const { trackName, trackTime } = song;
        return (
          <Song key={trackName}>
            <p>{trackName}</p>
            <p>{trackTime}</p>
          </Song>
        );
      })}
    </PopupList>
  );

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
          <img src={artworkUrl100} alt="" />
        </PopupAlbumInformation>
        {popupList()}
      </PopupWrapper>
    </PopupDialog>
  );
};

export default Popup;
