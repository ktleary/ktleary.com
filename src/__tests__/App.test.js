import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("it renders Kevin Leary", () => {
  render(<App />);
  const headerText = "Kevin Leary";
  const headerTextElement = screen.getByTestId("header-title");
  expect(headerTextElement).toHaveTextContent(headerText);
});

test("it renders an underline with color #ff8a65", () => {
  render(<App />);
  const headerTextElement = screen.getByTestId("underline");
  expect(headerTextElement).toHaveStyle({
    background: "rgb(255, 159, 10)",
  });
});

test("it renders the code view when view is set to code", () => {
  const view = "code";
  const { getByTestId } = render(<App />);
  const node = getByTestId(`profile-link-${view}`);
  fireEvent.click(node, { target: { name: view } });
  const codeContainer = getByTestId("code-container");
  expect(codeContainer).toBeInTheDocument();
});

 afterEach(cleanup)
