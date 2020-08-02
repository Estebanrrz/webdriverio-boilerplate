const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.cnn.com/',
  specs: ["./examples/CNN/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev: ["./examples/CNN/Tests/*.test.js"]
  },
  reporters: ["spec"],
  maxInstances: 6,
  services: ["browserstack"],
  capabilities: [
    {
      "project": `CNN test`,
      "browserstack.debug": true,
      "browser": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      },
      "resolution": '1280x1024',
      "os": "Windows",
      "os_version": "10",
      "browserstack.geoLocation": "US",
      "browserstack.console": "errors",
      "browserstack.networkLogs": true,
      "browserstack.idleTimeout": 120
    }
  ],
  //browserstack credentials
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
});
