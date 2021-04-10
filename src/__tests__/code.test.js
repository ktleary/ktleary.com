import { cleanup, render, screen } from "@testing-library/react";

import Code from "../components/code";
import RepoLinks, { repos } from "../components/repo-links";

it("renders the Code component", () => {
  const { getByTestId } = render(<Code />);
  const srlink = getByTestId("repo-link-SourceHut");
  expect(srlink).toBeInTheDocument();
});

it("finds github and sourcehut repo links", () => {
  const handleClick = (e) => {
    try {
      const name = e.target.getAttribute("name").toLowerCase();
      const url = repos[name.toLowerCase()].url;
      expect(url.indexOf("sr.ht") > -1 || url.indexOf("github") > -1);
    } catch (e) {
      const { name, message } = e;
      return { name, message };
    }
  };

  render(<RepoLinks handleClick={handleClick} />);
  const sourceHutLink = screen.getByTestId("repo-link-SourceHut");
  expect(sourceHutLink).toBeInTheDocument();
});

afterEach(cleanup);
