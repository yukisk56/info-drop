import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
  const props = { name: "add", size: 100 };

  it("handles the size prop being missing without error", () => {
    const newProps = { ...props, size: undefined };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconAdd")).toBeInTheDocument();
  });

  it("renders the add icon based on name prop", () => {
    const newProps = { ...props, name: "add" };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconAdd")).toBeInTheDocument();
  });

  it("renders the chevronDown icon based on name prop", () => {
    const newProps = { ...props, name: "chevronDown" };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconChevronDown")).toBeInTheDocument();
  });

  it("renders the add chevronLeft based on name prop", () => {
    const newProps = { ...props, name: "chevronLeft" };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconChevronLeft")).toBeInTheDocument();
  });

  it("renders the done icon based on name prop", () => {
    const newProps = { ...props, name: "done" };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconDone")).toBeInTheDocument();
  });

  it("renders the infoCircleOutline icon based on name prop", () => {
    const newProps = { ...props, name: "infoCircleOutline" };
    render(<Icon {...newProps} />);

    expect(screen.getByTestId("IconInfoCircleOutline")).toBeInTheDocument();
  });
});
