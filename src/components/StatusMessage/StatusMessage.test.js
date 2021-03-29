import { render, screen } from "@testing-library/react";
import StatusMessage from "./StatusMessage";

const props = {
  label: "Hello world!",
  variant: "loading",
};

describe("StatusMessage", () => {
  it("renders", () => {
    render(<StatusMessage {...props} />);

    expect(screen.getByTestId("StatusMessage")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<StatusMessage {...props} />);

    expect(screen.getByText(/Hello world!/i)).toBeInTheDocument();
  });
});
