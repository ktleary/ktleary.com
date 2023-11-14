import { render, screen } from "@testing-library/react";
import About from "../components/about";

it("contains text about being a software developer", () => {
  render(<About />);
  const regex = /software developer focused on Javascript/i; // Case-insensitive match
  const textElement = screen.getByText(regex);
  expect(textElement).toBeInTheDocument();
});
