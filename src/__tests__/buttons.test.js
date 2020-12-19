import { cleanup, render } from "@testing-library/react";
import {
  AngelListButton,
  CopyButton,
  GenericLinkButton,
  GitHubButton,
  EmailButton,
  SourceHutButton,
} from "../components/buttons";

it("renders all the buttons", () => {
  render(<AngelListButton />);
  render(<CopyButton />);
  render(<GenericLinkButton />);
  render(<GitHubButton />);
  render(<EmailButton />);
  render(<SourceHutButton />);
});

afterEach(cleanup);
