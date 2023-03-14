import { beforeEach, vi } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import type trpc from "../trpc";

const mockTrpc = mockDeep<typeof trpc>();

vi.mock("../trpc.ts", () => {
  return { default: mockTrpc };
});

beforeEach(() => {
  mockReset(mockTrpc);
});

export default mockTrpc;
