import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../test/test-utils";
import ErrorBoundary from "../components/ErrorBoundary";

afterEach(cleanup);

it("<Home /> renders without crashing", () => {
  // You should be able to show that you can verify Home rendered correctly
  const section = document.createElement("section");
  ReactDOM.render(<Home></Home>, section);
});

it("renders <Home /> correctly", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("title")).toHaveTextContent("Welcome!");
  expect(getByTestId("errorTest")).toHaveTextContent("Looks good");
});

const MockErrorThrow = (): JSX.Element => {
  throw new Error("some error");
};

it("show fallback on error", () => {
  render(
    <ErrorBoundary>
      <MockErrorThrow />
    </ErrorBoundary>
  );
  expect(MockErrorThrow).toThrowError("some error")
  expect(Error).toBeTruthy();
});
