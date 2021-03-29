import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

const props = {
  label: "Click me!",
  iconBefore: "add",
  onClick: jest.fn(),
};

describe("Button", () => {
  it("renders", () => {
    render(<Button {...props} />);

    expect(screen.getByTestId("Button")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<Button {...props} />);

    expect(screen.getByText(/Click me!/i)).toBeInTheDocument();
  });

  it("displays the icon", () => {
    render(<Button {...props} />);

    expect(screen.getByTestId("IconAdd")).toBeInTheDocument();
  });

  it("accepts missing icon prop without error", () => {
    const newProps = { ...props, iconBefore: undefined };
    render(<Button {...newProps} />);

    expect(screen.getByText(/Click me!/i)).toBeInTheDocument();
  });

  it("fires callback when clicked", () => {
    render(<Button {...props} />);

    const button = screen.getByText(/Click me!/i);
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
