/** @format */

import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./globalStyles/GlobalStyles";
import ArtistPage from "./views/artistPage/ArtistPage";
import HomePage from "./views/homePage/HomePage";

function App() {
  const selectedAuthor = useSelector((state) => state.author);
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {selectedAuthor.length !== 0 ? (
        <ArtistPage />
      ) : (
        <HomePage heroText="Witaj w MusicFinderze" />
      )}
    </>
  );
}

export default App;
