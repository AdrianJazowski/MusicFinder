/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { putAuthorToStore } from "../../actions";
import { getDataFromApiByAuthor } from "../../api/apiCallFunctions";

import {
  SearchFormWrapper,
  SearchInput,
  SearchButton,
} from "./SearchFormStyles";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleGetDataFromApi = (e) => {
    e.preventDefault();
    const phraseFromInputToReducer = e.target.searchInput.value;
    const currentPhraseToApi = e.target.searchInput.value.split(" ").join("+");
    dispatch(putAuthorToStore(phraseFromInputToReducer));
    dispatch(getDataFromApiByAuthor(currentPhraseToApi));

    e.target.reset();
  };

  return (
    <SearchFormWrapper onSubmit={handleGetDataFromApi}>
      <SearchInput placeholder="Szukaj" name="searchInput" />
      <SearchButton>Szukaj</SearchButton>
    </SearchFormWrapper>
  );
};

export default SearchForm;
