process.env.CHROME_BIN = require('puppeteer').executablePath()
const webpackConfig = require('./webpack.test.config')

module.exports = (config) => {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha'],
        reporters: ['spec', 'coverage'],

        files: [
            { pattern: 'test/*.test.js', watched: false },
            { pattern: 'test/**/*.test.js', watched: false },
        ],

        preprocessors: {
            'test/*.test.js': ['webpack', 'sourcemap'],
            'test/**/*.test.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only',
        },
    });
};