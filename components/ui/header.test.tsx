import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./header";

test("header", () => {
  render(<Header />);
  expect(screen.getByRole("banner")).toBeDefined();
});
