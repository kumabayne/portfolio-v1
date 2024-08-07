import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Contact from "./contact";

describe("Contact", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders contact heading", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  });

  it("renders description", () => {
    render(<Contact />);
    expect(
      screen.getByText("Reach out to me via one of the channels below.")
    ).toBeDefined();
    expect(
      screen.getByText("I look forward to hearing from you.")
    ).toBeDefined();
  });

  it("renders email link", () => {
    render(<Contact />);
    const link = screen.getByRole("link", {
      name: "Send me an email at kumabayne@icloud.com",
    });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("mailto:kumabayne@icloud.com");
  });

  it("renders linkedin link", () => {
    render(<Contact />);
    const link = screen.getByRole("link", {
      name: "Connect with me on LinkedIn",
    });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/kuma-bayne-1b83b7168/"
    );
  });

  it("renders github link", () => {
    render(<Contact />);
    const link = screen.getByRole("link", {
      name: "Check out my GitHub",
    });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("https://github.com/kumabayne");
  });
});
