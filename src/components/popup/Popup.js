/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  putDataAboutAlbumArtist,
  getDataFromApiAboutOneAlbum,
} from "../../actions";
import PopupList from "../popupList/PopupList";
import PopupAlbumInformation from "../popupAlbumInformation/PopupAlbumInformation";
import { PopupDialog, PopupWrapper, CloseBtn } from "./PopupStyles";

const Popup = ({ handleOpenDialogWithAlbumData, openPopup }) => {
  const dispatch = useDispatch();
  const selectedAlbum = useSelector((state) => state.album);

  return (
    <PopupDialog open={openPopup} data-testid="popup-test">
      <PopupWrapper>
        <CloseBtn
          onClick={() => {
            dispatch(getDataFromApiAboutOneAlbum([]));
            dispatch(putDataAboutAlbumArtist([]));
            handleOpenDialogWithAlbumData();
          }}
        />
        <PopupAlbumInformation />
        <PopupList selectedAlbum={selectedAlbum} />
      </PopupWrapper>
    </PopupDialog>
  );
};

export default Popup;
