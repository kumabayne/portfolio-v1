import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import MainNav from "./main-nav";

describe("MainNav", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders navigation", () => {
    render(<MainNav />);
    expect(screen.getByRole("navigation")).toBeDefined();
  });

  it("renders work link", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "Work" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("#work");
  });

  it("renders about link", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("#about");
  });

  it("renders contact link", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("#contact");
  });

  it("renders download resume link", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "Download Resume" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/kuma-bayne_resume.pdf");
  });
});
