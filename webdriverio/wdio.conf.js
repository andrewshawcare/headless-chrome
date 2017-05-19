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
  ]
};