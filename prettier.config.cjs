/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  endOfLine: "auto",
};

module.exports = config;
