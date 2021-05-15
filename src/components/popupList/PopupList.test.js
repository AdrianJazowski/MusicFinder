/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import PopupList from "./PopupList";

describe("<PopupAlbumInformation/>", () => {
  const initialState = {
    selectedAlbum: [
      {
        trackName: "The best of Krawczyk",
        trackTime: 40000,
      },
    ],
  };
  const mockStore = configureStore();
  let store;
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("whether the component PopupList is rendering", () => {
    store = mockStore(initialState);
    useSelectorMock.mockReturnValue({ initialState });
    const { selectedAlbum } = initialState;

    const { getByTestId } = render(
      <Provider store={store}>
        <PopupList selectedAlbum={selectedAlbum} />
      </Provider>
    );
  });
});
