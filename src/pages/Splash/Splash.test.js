import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Splash from "./Splash";

describe("Splash", () => {
  it("renders", () => {
    render(
      <Router>
        <Splash />
      </Router>
    );

    expect(screen.getByTestId("Splash")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <Router>
        <Splash />
      </Router>
    );

    expect(screen.getByText(/Rumour Publisher/i)).toBeInTheDocument();
  });

  it("displays the link", () => {
    render(
      <Router>
        <Splash />
      </Router>
    );

    expect(screen.getByText(/Create new rumour/i)).toBeInTheDocument();
  });
});
