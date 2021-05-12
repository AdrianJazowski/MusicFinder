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

const HomePage = ({ test }) => {
  return (
    <MainPage data-testid="test-one">
      <LeftSection>
        <HeroSection>
          <h1>{test}</h1>
          {/* zapytac jak to inaczej moze wygladac */}

          <p>Cała twoja ulubiona muzyka na wyciągnięcie reki</p>
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
