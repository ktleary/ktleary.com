import { cleanup, render, screen } from "@testing-library/react";
import About from "../components/about";

it("shows broadcove text on about", () => {
  render(<About />);
  const broadcove = screen.getByText("Broadcove");
  expect(broadcove).toBeInTheDocument();
});

afterEach(cleanup);
