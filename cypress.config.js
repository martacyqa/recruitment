const { defineConfig } = require("cypress");

module.exports = defineConfig({
screenshotsFolder: './output/screenshots',
videosFolder: './output/videos',
  video: false,
  defaultCommandTimeout: 20000,
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  viewportWidth: 1280,
  viewportHeight: 800,
e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://qalab.pl.tivixlabs.com/',
  },
})


