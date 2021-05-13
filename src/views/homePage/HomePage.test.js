/** @format */

import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom/extend-expect";

describe("<HomePage", () => {
  it("whether the component is rendering", () => {
    const { getByText } = render(<HomePage heroText={() => {}} />);
    expect(getByText("Cała twoja ulubiona muzyka na wyciągnięcie ręki"));
  });
  it("whether the component is rendering with props", () => {
    const { getByTestId } = render(
      <HomePage heroText="Witaj w MusicFinderze" />
    );

    expect(getByTestId("homePage-test")).toHaveTextContent(
      "Witaj w MusicFinderze"
    );
  });
});
