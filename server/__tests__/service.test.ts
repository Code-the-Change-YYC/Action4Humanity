import { helloWorld } from "../service";

it("says hello", () => {
  const value = "you";
  expect(helloWorld(value)).toBe("hello you");
});
