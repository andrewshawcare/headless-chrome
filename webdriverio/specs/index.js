const assert = require('assert');

const { browser } = global;

describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
      browser.url('https://duckduckgo.com/');

      const searchInputElement = browser.element('#search_form_input_homepage');
      searchInputElement.setValue('WebdriverIO');

      const searchButtonElement = browser.element('#search_button_homepage');
      searchButtonElement.click();

      const firstResultTitleElement = browser.element('#r1-0');
      assert.ok(firstResultTitleElement.getText().includes('WebdriverIO'));
    });
});
