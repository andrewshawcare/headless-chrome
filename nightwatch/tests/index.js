module.exports = {
  'Galaxy S8': (client) => {
    client
      .url('https://www.telus.com/en/on/mobility/phones')
      .waitForElementVisible('#samsung-galaxy-s8_link', 1000)
      .click('#samsung-galaxy-s8_link')
      .waitForElementVisible('.device-config__name', 1000)
      .assert.containsText(".device-config__name", "Galaxy S8");
  },
  after: (client) => {
    client.end();
  }
};
