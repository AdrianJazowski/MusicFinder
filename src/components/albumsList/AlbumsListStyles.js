/** @format */

import styled from "styled-components";
export const AlbumListWrapper = styled.ul`
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
