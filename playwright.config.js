const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'test',
  use: {
    browserName: 'chromium',
    headless: true,
  },
  reporter: 'list',
  timeout: 30000,
});