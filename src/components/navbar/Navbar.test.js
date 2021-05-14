/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Navbar from "./Navbar";

describe("<Navbar", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it("whether the component Navbar is rendering", () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(getByPlaceholderText("Szukaj"));
  });
});
