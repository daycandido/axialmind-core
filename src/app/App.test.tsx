import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the empty state correctly", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /welcome to axialmind/i })).toBeInTheDocument();
    expect(screen.getByText(/the application is currently empty/i)).toBeInTheDocument();
  });
});
