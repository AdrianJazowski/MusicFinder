/** @format */

import React from "react";
import {
  LeftSection,
  RightSection,
  MainPage,
  PhotoBackground,
  PhotoWrapper,
  HeroSection,
} from "./HomePageStyles";

const HomePage = ({ heroText }) => {
  return (
    <MainPage data-testid="homePage-test">
      <LeftSection>
        <HeroSection>
          <h1>{heroText}</h1>

          <p>Cała twoja ulubiona muzyka na wyciągnięcie ręki</p>
          <p>Potrzebujesz więcej piosenek swojego ulubionego wykonawcy?</p>
          <p>Znasz tytuł piosenki albo albumu ale nie wiesz kto to śpiewa?</p>
          <h4>U nas znajdziesz pytania na wszystkie te odpowiedzi.</h4>
          <p>Wyszukuj, baw się dobrze oraz poszerzaj swoje horyzotny</p>
        </HeroSection>
      </LeftSection>
      <RightSection>
        <PhotoWrapper>
          <PhotoBackground></PhotoBackground>
        </PhotoWrapper>
      </RightSection>
    </MainPage>
  );
};

export default HomePage;
