import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Logo from "./logo";

describe("Logo", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders logo", () => {
    render(<Logo />);
    expect(screen.getByTestId("logo")).toBeDefined();
  });
});
