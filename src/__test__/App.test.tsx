import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import App from "../App";

describe("App.tsxテスト", () => {
  it("タイトルが表示されている", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "h1タイトル" })).toBeDefined();
  });
});
