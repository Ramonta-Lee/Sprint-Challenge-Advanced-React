import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as RTL from "@testing-library/react";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/Navbar";
import {
  getByText,
  getAllByAltText,
  getAllByText
} from "@testing-library/react";
import data from "../../data.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("player data present", () => {
  expect(data.data[0].name).toBe("Alex Morgan");
  expect(data.data[0].country).toBe("United States");
  expect(data.data[0].searches).toBe(100);
});

// test("theme button clicks", () => {
//   const {getByText} = RTL.render(<Navbar />);
//   RTL.fireEvent.click(getByText(/theme/i))
// });

test("this should say World Cup", () => {
  const { getAllByText } = RTL.render(<App />);
  getAllByText(/world/i);
});
