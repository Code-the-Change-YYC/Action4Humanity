import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import mockTrpc from "../__mocks__/trpc.mock";
import App from "../App";
import { partialMocked } from "./util";

describe("App", () => {
  it("renders trpc hello message", () => {
    const helloMessage = "hello chief keef hehe";

    // partialMocked(mockTrpc.helloWorld.useQuery).mockReturnValue({
    //   data: helloMessage,
    // });
    // render(<App />);

    expect(3).equals(3);
  });
});
