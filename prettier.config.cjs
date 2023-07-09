/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  singleQuote: true,
  printWidth: 80,
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: false,
};

module.exports = config;
