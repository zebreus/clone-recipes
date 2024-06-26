const organizeImports = require("prettier-plugin-organize-imports")

module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "consistent",
  requirePragma: false,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  vueIndentScriptAndStyle: false,
  plugins: [organizeImports],
}

