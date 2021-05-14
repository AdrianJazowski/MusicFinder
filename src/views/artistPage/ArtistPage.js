/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import AlbumsList from "../../components/albumsList/AlbumsList";
import Popup from "../../components/popup/Popup";
import {
  ArtistPageWrapper,
  ArtistInfo,
  AlbumsWrapper,
} from "./ArtistPageStyles";

const ArtistPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const selectedAuthor = useSelector((state) => state.author);

  const handleOpenDialogWithAlbumData = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <ArtistPageWrapper>
      <ArtistInfo>
        <h1>{selectedAuthor.toUpperCase()}</h1>
      </ArtistInfo>
      <AlbumsWrapper>
        <AlbumsList
          handleOpenDialogWithAlbumData={handleOpenDialogWithAlbumData}
        />
      </AlbumsWrapper>
      <Popup
        handleOpenDialogWithAlbumData={handleOpenDialogWithAlbumData}
        openPopup={openPopup}
      />
    </ArtistPageWrapper>
  );
};

export default ArtistPage;
