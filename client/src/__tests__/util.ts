import { vi } from "vitest";

export function partialMocked<T>(mock: T) {
  return vi.mocked(mock, { partial: true });
}
