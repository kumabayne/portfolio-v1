import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders footer", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });
});
