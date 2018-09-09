var env = require('./environment.js');

exports.config = {

  framework: 'custom',
  seleniumAddress: env.seleniumAddress,
  specs: ['../features/*.feature'],
  capabilities: env.capabilities,
  baseUrl: 'https://www.freelancer.com/',
  ignoreUncaughtExceptions: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    cucumberOpts: {
      require: [
        '../step_definitions/*.js'
      ]
    },

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
    },
    onPrepare: function () {
      browser.manage().window().maximize();
  },

  allScriptsTimeout: 12000
  
}