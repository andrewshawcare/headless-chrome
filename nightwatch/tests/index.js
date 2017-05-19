module.exports = {
  'DuckDuckGo search': (client) => {
    client
      .url('https://duckduckgo.com/')
      .waitForElementVisible('#search_form_input_homepage', 1000)
      .setValue('#search_form_input_homepage', 'WebdriverIO')
      .waitForElementVisible('#search_button_homepage', 1000)
      .click('#search_button_homepage');
  },
  after: (client) => {
    client.end();
  }
};
