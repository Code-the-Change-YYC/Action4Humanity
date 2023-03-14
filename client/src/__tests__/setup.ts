/* eslint-disable @typescript-eslint/no-namespace */
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

type TestingLibraryMatchers = typeof matchers;

declare global {
  namespace Vi {
    interface Assertion extends TestingLibraryMatchers {}
    interface AsymmetricMatchersContaining extends TestingLibraryMatchers {}
  }
}

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
