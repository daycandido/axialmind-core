import { StrictMode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const renderMock = vi.fn();
const createRootMock = vi.fn(() => ({ render: renderMock }));
const MockApp = () => <div data-testid="app" />;

vi.mock("react-dom/client", () => ({
  createRoot: createRootMock,
}));

vi.mock("./app/App", () => ({
  default: MockApp,
}));

describe("main", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    renderMock.mockClear();
    createRootMock.mockClear();
  });

  it("renders App within StrictMode", async () => {
    vi.resetModules();
    await import("./main");

    const root = document.getElementById("root");
    expect(createRootMock).toHaveBeenCalledWith(root);
    expect(renderMock).toHaveBeenCalledTimes(1);

    const renderedElement = renderMock.mock.calls[0][0];
    expect(renderedElement.type).toBe(StrictMode);
    expect(renderedElement.props.children.type).toBe(MockApp);
  });
});
