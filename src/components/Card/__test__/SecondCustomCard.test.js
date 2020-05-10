import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Card from "../SecondCustomCard";
import "jest-dom/extend-expect"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card busInfo={[]} />, div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  const { getByTestId } = render(<Card busInfo={[]} />);
  expect(getByTestId).toHaveTextContent()
});
