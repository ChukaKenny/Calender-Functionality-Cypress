module.exports = {
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/#/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
    specPattern: "cypress/Integration/Tests/*.js" 
  },
};
