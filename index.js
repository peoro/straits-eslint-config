/* eslint-env node */
/* eslint strict: ["error", "global"] */

'use strict';

module.exports = {
	extends: "@peoro/eslint-config",
	env: {
		es6: true
	},
	plugins: [
		"@straits/eslint-plugin"
	],
	rules: {
		// Since we're using babel, let's always use @babel/plugin-transform-strict-mode
		strict: [
			"error",
			"never"
		]
	}
};
