import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("App", () => {
  it("renders", () => {
    render(<NotFound />);

    expect(screen.getByTestId("NotFound")).toBeInTheDocument();
  });

  it("displays the text", () => {
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
