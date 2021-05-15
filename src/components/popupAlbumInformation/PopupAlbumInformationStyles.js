/** @format */

import styled from "styled-components";
export const PopupAlbumInformationWrapper = styled.div`
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
export const Information = styled.div`
  color: #388bfd;
  p {
    margin-top: 0.5rem;
  }
`;
