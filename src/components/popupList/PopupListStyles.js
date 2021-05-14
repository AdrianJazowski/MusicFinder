/** @format */

import styled from "styled-components";

export const PopupListWrapper = styled.ul`
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
