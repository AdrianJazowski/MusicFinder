/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm from "./SearchForm";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("<SearchForm", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it("whether the component SearchForm is rendering", () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
    expect(getByPlaceholderText("Szukaj"));
  });
});
