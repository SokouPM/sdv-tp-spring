module.exports = {
	root: true,
	env: {
		es2022: true,
		node: true,
		browser: true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 13,
	},
	extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
	plugins: ["react", "react-hooks", "import"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		indent: "off",
		"linebreak-style": ["error", "unix"],
		"no-unused-vars": "error",
		"prefer-const": "error",
		quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
		"no-multiple-empty-lines": ["error", { max: 1 }],
		semi: ["error", "never"],
		"no-console": "error",
		"no-implicit-globals": "error",
		"no-warning-comments": ["warn", { terms: ["fixme", "todo"] }],
		"newline-before-return": "error",
		curly: "error",
		"padded-blocks": ["error", "never"],
		"space-before-blocks": "error",
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: ["break", "case", "cjs-export", "class", "continue", "do", "if", "switch", "try", "while", "return"],
			},
			{
				blankLine: "always",
				prev: ["break", "case", "cjs-export", "class", "continue", "do", "if", "switch", "try", "while", "return"],
				next: "*",
			},
		],
		"react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
		"react/react-in-jsx-scope": "off", // React 17 doesn't require this rule
		"react/prop-types": "off",
	},
}
