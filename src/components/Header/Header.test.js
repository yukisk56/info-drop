import { render, screen } from "@testing-library/react";
import Header from "./Header";

const props = {
  title: "Some title",
  subtitle: "A subtitle",
};

describe("Header", () => {
  it("renders", () => {
    render(<Header {...props} />);

    expect(screen.getByTestId("Header")).toBeInTheDocument();
  });

  it("displays the expected text", () => {
    render(<Header {...props} />);

    expect(screen.getByText(/Some title/i)).toBeInTheDocument();
  });

  it("renders without error if the subtitle is missing", () => {
    const newProps = { ...props, subtitle: undefined };
    render(<Header {...newProps} />);

    expect(screen.getByText(/Some title/i)).toBeInTheDocument();
    expect(screen.queryByText(/A subtitle/i)).not.toBeInTheDocument();
  });
});
