/** @format */

import styled from "styled-components";

export const ArtistPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
`;

export const ArtistInfo = styled.div`
  display: flex;
  width: 60%;
  h1 {
    margin: 2rem 0 1rem 5rem;
    color: #388bfd;
  }
`;

export const AlbumsWrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  align-self: center;
`;
export const AlbumListUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  list-style: none;
  li {
    color: #388bfd;
    cursor: pointer;
    &:hover {
      color: #8799b1;
    }
    p {
      margin: 0.2rem;

      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 769px) {
    flex-wrap: nowrap;
  }
`;
