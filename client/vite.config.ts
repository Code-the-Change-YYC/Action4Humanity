import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";

const test = {
  environment: "jsdom",
  setupFiles: ["./src/__tests__/setup.ts"],
} satisfies InlineConfig;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test,
});
