import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Code from "../components/code";
import RepoLinks, { repos } from "../components/repo-links";

it("finds github and sourcehut repo links", () => {
  const handleClick = (e) => {
    try {
      const name = e.target.getAttribute("name").toLowerCase();
      const url = repos[name.toLowerCase()].url;
      window.open(url);
    } catch (e) {
      const { name, message } = e;
      console.log(name, message);
      return { name, message };
    }
  };

  render(<RepoLinks handleClick={handleClick} />);
  const sourceHutLink = screen.getByTestId("repo-link-SourceHut");
  const gitHubLink = screen.getByTestId("repo-link-GitHub");
  expect(sourceHutLink).toBeInTheDocument();
  expect(gitHubLink).toBeInTheDocument();
});

it("captures the name", (done) => {
  const name = "SourceHut";
  delete global.window.open;
  global.window.open = jest.fn();
  const { getByTestId } = render(<Code />);
  const node = getByTestId("repo-link-SourceHut");
  fireEvent.click(node, { currentTarget: { name } });
  expect(window.open).toHaveBeenCalledWith(repos[name.toLowerCase()].url);
  done();
});


afterEach(cleanup);
