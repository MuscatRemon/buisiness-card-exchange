import { it, expect, describe, vi } from "vitest";

let mockDB: [] = [
  // プロジェクトに合ったDBを記載する
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
  it("Topが表示されている", () => {
    render(
      <Provider>
        <App />
      </Provider>,
    );
    expect(screen.getByText("新規名刺登録")).toBeInTheDocument();
  });
});
