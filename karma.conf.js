const { resolve } = require('path');
const testWebpackConfig = {...require('./webpack.config.js'), mode: 'development'};

module.exports = config => {
  config.set({
    //browsers: ['electron'],
    basePath: resolve(''),
    frameworks: ['jasmine'],
    files: [
      { pattern: 'app/renderer/**/*.test.tsx' }
    ],
    preprocessors: {
      'app/renderer/**/*.test.tsx': ['webpack', 'sourcemap', 'electron']
    },
    client: {
      useIframe: false,
    },
    webpack: testWebpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-electron',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    // Specify usage of our custom launcher
    browsers: ['Electron'],
  });
};
