import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "./Link";

const props = {
  label: "Click me!",
  iconBefore: "add",
  to: "/some-page",
};

describe("Link", () => {
  it("renders", () => {
    render(
      <Router>
        <Link {...props} />
      </Router>
    );

    expect(screen.getByTestId("Link")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(
      <Router>
        <Link {...props} />
      </Router>
    );

    expect(screen.getByText(/Click me!/i)).toBeInTheDocument();
  });

  it("displays the icon", () => {
    render(
      <Router>
        <Link {...props} />
      </Router>
    );

    expect(screen.getByTestId("IconAdd")).toBeInTheDocument();
  });

  it("accepts missing icon prop without error", () => {
    const newProps = { ...props, iconBefore: undefined };
    render(
      <Router>
        <Link {...newProps} />
      </Router>
    );

    expect(screen.getByText(/Click me!/i)).toBeInTheDocument();
  });

  it("links to the correct location as passed in props", () => {
    render(
      <Router>
        <Link {...props} />
      </Router>
    );

    const link = screen.getByText(/Click me!/i).closest("a");

    expect(link).toHaveAttribute("href", props.to);
  });
});
