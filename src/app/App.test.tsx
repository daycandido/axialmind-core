import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders an empty container", () => {
    const { container } = render(<App />);
    const div = container.querySelector("div");

    expect(div).not.toBeNull();
    expect(container.firstElementChild).toBe(div);
    expect(div).toBeEmptyDOMElement();
  });
});
