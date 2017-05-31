const waitForPort = require('wait-for-port');

exports.config = {
  host: "chrome",
  port: 9515,
  path: "/",
  specs: ["specs/*.js"],
  capabilities: [
    {
      browserName: "chrome",
      chromeOptions: {
        debuggerAddress: "chrome:9222"
      }
    }
  ],
  beforeSession: () => {
    return new Promise((resolve, reject) => {
      waitForPort('chrome', 9222, (error) => {
        error ? reject(error) : resolve()
      });
    });
  }
};
