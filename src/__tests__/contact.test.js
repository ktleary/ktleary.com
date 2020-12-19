import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/contact";

it("renders a linkrow for AngelList", () => {
  const name = "AngelList";
  const { getByTestId } = render(<Contact />);
  const linkRow = getByTestId(`link-cell-${name}`);
  expect(linkRow).toBeInTheDocument();
});

it("does not show the Copy Button on initial load", () => {
  const { queryByTitle } = render(<Contact />);
  const copyIcon = queryByTitle("Copy");
  expect(copyIcon).not.toBeInTheDocument();
});

it("shows the Copy Button after mouseenter Email linkrow", () => {
  const { getByTestId, queryByTitle } = render(<Contact />);
  const emailLinkRow = getByTestId("link-row-Email");
  fireEvent.mouseEnter(emailLinkRow);
  const copyIcon = queryByTitle("Copy");
  expect(copyIcon).toBeInTheDocument();
});


it("hides the Copy Button after mouseLeave Email linkrow", () => {
  const { getByTestId, queryByTitle } = render(<Contact />);
  const emailLinkRow = getByTestId("link-row-Email");
  fireEvent.mouseEnter(emailLinkRow);
  fireEvent.mouseLeave(emailLinkRow);
  const copyIcon = queryByTitle("Copy");
  expect(copyIcon).not.toBeInTheDocument();
});


afterEach(cleanup);
