const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // pageLoadTimeout: 9000,
    baseUrl: "https://difmark.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
