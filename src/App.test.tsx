import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("renders main sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /skills/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact/i }),
    ).toBeInTheDocument();
  });
});
