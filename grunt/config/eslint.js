// See https://github.com/sindresorhus/grunt-eslint
module.exports = {
	target: {
		src: [ "<%= files.js %>", "<%= files.jsDontLint %>" ],
		options: {
			maxWarnings: 73,
		},
	},
	tests: {
		src: [ "<%= files.jsTests %>" ],
		options: {
			configFile: ".eslintrc-tests",
			maxWarnings: 102,
		},
	},
};
