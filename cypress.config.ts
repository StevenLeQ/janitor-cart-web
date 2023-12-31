import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/superadmin',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'test/cypress-test.xml'
  }
});
