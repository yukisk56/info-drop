import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

const props = {
  label: "Hello world!",
};

describe("Tag", () => {
  it("renders", () => {
    render(<Tag {...props} />);

    expect(screen.getByTestId("Tag")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<Tag {...props} />);

    expect(screen.getByText(/Hello world!/i)).toBeInTheDocument();
  });
});
