import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as RTL from "@testing-library/react";
import "@testing-library/react";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/Navbar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders PlayerCard", () => {
  RTL.render(<App />, <PlayerCard />);
});
test("darkMode button clicks", () => {
  const {getByText} = RTL.render(<Navbar />);
  RTL.fireEvent.click(getByText(/night/i));

})