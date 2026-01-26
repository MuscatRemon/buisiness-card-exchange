import { it, expect, describe, vi } from "vitest";

let mockDB: [] = [
  // プロジェクトに合った設定をしてください
  // { id: 1, title: "React", time: 2 },
  // { id: 2, title: "TEST", time: 4 },
];

vi.mock("@/utils/supabase", () => {
  return {
    default: {
      from: vi.fn(() => ({
        select: vi.fn().mockImplementation(async () => ({
          data: [...mockDB],
          error: null,
        })),
      })),
    },
  };
});

import { render, screen } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";
import App from "@/App";

describe("App.tsxテスト", () => {
  it("タイトルが表示されている", () => {
    render(
      <Provider>
        <App />
      </Provider>,
    );
    expect(screen.getByRole("heading", { name: "h1タイトル" })).toBeDefined();
  });
});
