/** @format */
import bg from "../../assests/background.jpg";
import styled from "styled-components";

export const MainPage = styled.main`
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 80%;

  @media (max-width: 767px) {
    margin-top: 1.5rem;
    height: 95%;
    width: 100%;
  }

  @media (max-width: 359px) {
    width: 100%;
    height: 100%;
    margin-top: 2rem;
  }

  h1 {
    color: #388bfd;
    font-size: 3rem;
    @media (max-width: 1024px) {
      margin-bottom: 5rem;
    }
    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
    @media (max-width: 359px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  p {
    color: whitesmoke;
    margin: 1rem;
    font-size: 1.5rem;
    color: #777;
    @media (max-width: 359px) {
      font-size: 1rem;
    }
  }
  h4 {
    color: #388bfd;
    margin: 1rem;
    font-size: 2rem;
    @media (max-width: 359px) {
      font-size: 1.2rem;
    }
  }
`;
export const RightSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 90vh;
  @media (max-width: 840px) {
    display: none;
  }
`;
export const PhotoWrapper = styled.div`
  width: 80%;
  height: 80%;
`;
export const PhotoBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center / cover;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 10px;
`;
