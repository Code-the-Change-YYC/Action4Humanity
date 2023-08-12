// /** @type {import("prettier").Config} */
const config = {
  plugins: [
    // require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  endOfLine: "auto",
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
