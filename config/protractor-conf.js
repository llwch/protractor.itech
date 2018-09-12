var env = require('./environment.js');

const stepsFolder = './step_definitions';
const fs = require('fs');

var steps = []

fs.readdirSync(stepsFolder).forEach(file => {
    step = stepsFolder + '/' + file;
    steps.push(step);
  });

exports.config = {

  framework: 'custom',
  seleniumAddress: env.seleniumAddress,
  specs: ['../features/*.feature'],
  capabilities: env.capabilities,
  baseUrl: 'https://www.freelancer.com/',
  ignoreUncaughtExceptions: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    cucumberOpts: {
      require: steps
    },

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
    },
    onPrepare: function () {
      browser.manage().window().maximize();
  },

  allScriptsTimeout: 12000
};