import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import About from "./about";

describe("About", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders about heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  });

  it("renders description", () => {
    render(<About />);
    expect(
      screen.getByText(
        "Pixel pusher by day, nature lover by night. When I'm not coding, you can find me hiking, camping, or exploring new places with my family."
      )
    ).toBeDefined();
  });

  it("renders skill heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Skills" })
    ).toBeDefined();
  });

  it("renders skill list", () => {
    render(<About />);
    expect(screen.getByTestId("skill-list").children).toHaveLength(9);
  });

  it("renders experience heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Experience" })
    ).toBeDefined();
  });

  it("renders experience list", () => {
    render(<About />);
    expect(screen.getByTestId("experience-list").children).toHaveLength(3);
  });

  it("renders download resume link", () => {
    render(<About />);
    const link = screen.getByRole("link", { name: "Download Resume" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/kuma-bayne_resume.pdf");
  });
});
