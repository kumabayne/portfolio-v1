import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders header", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeDefined();
  });
});
