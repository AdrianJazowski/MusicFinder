/** @format */

import "@testing-library/jest-dom/extend-expect";

import { cleanup } from "@testing-library/react";
import * as axios from "axios";
import { convertSongDuration } from "./helperFunctions";

describe("test apiCallFunctions", () => {
  afterEach(cleanup);
  it("fetches data", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          collectionName: "The best of Krawczyk",
          collectionId: 1,
        },
      ],
    });

    expect(axios.get).toHaveBeenCalledTimes(0);
  });
  it("test correctness helper function", () => {
    const time = 8000;

    expect(convertSongDuration(time)).toBe("0:08");
  });
});
