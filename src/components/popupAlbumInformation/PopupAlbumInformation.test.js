/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import PopupAlbumInformation from "./PopupAlbumInformation";

describe("<PopupAlbumInformation/>", () => {
  const initialState = {
    artistName: "Krzysztof Krawczyk",
  };
  const mockStore = configureStore();
  let store;
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("whether the component PopupAlbumInformation is rendering", () => {
    store = mockStore(initialState);
    useSelectorMock.mockReturnValue({ initialState });
    const { getByTestId } = render(
      <Provider store={store}>
        <PopupAlbumInformation />
      </Provider>
    );
    expect(getByTestId("artistName-test"));
  });
});
