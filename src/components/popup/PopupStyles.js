/** @format */

import { Dialog } from "@material-ui/core";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

export const PopupDialog = styled(Dialog)`
  height: 90vh;
  width: 80vw;
  margin: auto;

  .MuiDialog-paperWidthSm {
    max-width: none;
  }
`;
export const PopupWrapper = styled.div`
  background: white;
  width: 70vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #212a36;
  @media (max-width: 539px) {
    width: 60vw;
  }
`;
export const PopupList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  list-style: none;
  margin-top: 1rem;
  @media (max-width: 539px) {
    overflow-y: auto;
    margin-bottom: 1rem;
  }
`;
export const Information = styled.div`
  color: #388bfd;
  p {
    margin-top: 0.5rem;
  }
`;

export const Song = styled.li`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  cursor: pointer;
  color: #777;
  @media (max-width: 539px) {
    flex-direction: column;
  }

  &:hover {
    background-color: #2b3038;
    p {
      color: #388bfd;
    }
  }
`;

export const CloseBtn = styled(CloseIcon)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  font-size: 3rem;
  color: #777;
`;
export const PopupAlbumInformation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 2rem;
  @media (max-width: 539px) {
    img {
      display: none;
    }
  }
`;
