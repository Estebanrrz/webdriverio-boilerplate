const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.cnn.com/',
  specs: ["./examples/CNN/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev: ["./examples/CNN/Tests/*.test.js"]

  },
  reporters: ["spec"],
  maxInstances: 2,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
