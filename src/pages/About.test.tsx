import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/test-utils";
import About from "./About";
import "@testing-library/jest-dom/extend-expect";

it("renders <About /> page", () => {
  // You should be able to verify the About page rendered correctly.
  const { getByTestId } = render(<About />);
  expect(getByTestId("aboutPage")).toHaveTextContent("About Page");
  expect(getByTestId("increment")).toHaveTextContent("Increment");
  expect(getByTestId("counter")).toHaveTextContent("Current Count: 0");
});

it("clicks button and fires increment counter", () => {
  // You should be able to click the increment button and verify the count.
  const { getByTestId } = render(<About />);
  expect(getByTestId("counter")).toHaveTextContent("Current Count: 0");
  userEvent.click(getByTestId("increment"));
  expect(getByTestId("counter")).toHaveTextContent("Current Count: 1");
  userEvent.click(getByTestId("increment"));
  expect(getByTestId("counter")).toHaveTextContent("Current Count: 2");
});
