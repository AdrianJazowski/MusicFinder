/** @format */

import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  display: flex;
  width: 50%;
  height: 40%;
  justify-content: center;
`;
export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #388bfd;
  outline: none;
  width: 50%;
  height: 2rem;
  border-radius: 5px;
  background-color: #0d1117;
  padding: 1rem;
  color: #fff;
  &:focus {
    border: 1px solid #388bfd;
  }
`;
export const SearchButton = styled.button`
  border: none;
  border-bottom: 1px solid #388bfd;
  background: #0d1117;
  transition: 0.3s;
  border-radius: 5px;
  color: white;
  margin-left: 1rem;
  width: 5rem;
  height: 2rem;
  &:hover {
    background: #1d57ad;
    border: 1px solid #388bfd;
  }
`;
