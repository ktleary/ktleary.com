import { render, screen } from "@testing-library/react";
import App from "../App";

test("it renders Kevin T Leary", () => {
  render(<App />);
  const headerText = "ktleary";
  const headerTextElement = screen.getByTestId("header-title");
  expect(headerTextElement).toHaveTextContent(headerText);
});

test("it renders an underline with color #ff8a65", () => {
  render(<App />);
  const headerTextElement = screen.getByTestId("underline");
  expect(headerTextElement).toHaveStyle({
    background: "rgba(255, 138, 101, 0.666)",
  });
});
