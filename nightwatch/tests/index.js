module.exports = {
  'DuckDuckGo search': (client) => {
    client
      .url('https://duckduckgo.com/')
      .waitForElementVisible('#search_form_input_homepage', 1000)
      .setValue('#search_form_input_homepage', 'Nightwatch.js')
      .waitForElementVisible('#search_button_homepage', 1000)
      .click('#search_button_homepage')
      .waitForElementVisible('#r1-0', 1000)
      .assert.containsText('#r1-0', 'Nightwatch.js')
      .end();
  }
};
