const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// npm run rest-api - banco-api
// npm run server - banco-web