module.exports = {
	parser: "babel-eslint",
	extends: [
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"prettier/react"
	],
	plugins: ["prettier", "react", "react-hooks"],
	settings: {
		react: {
			version: "detect"
		}
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		"react/prop-types": "off"
	}
};
