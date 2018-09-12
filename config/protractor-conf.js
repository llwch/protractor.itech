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
  resultJsonOutputFile: '../reports/report.json',
    
  cucumberOpts: {
      require: steps
  },

  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
  },
  onPrepare: async function () {
      await browser.manage().window().maximize();
  },

  allScriptsTimeout: 12000,

  afterLaunch: function(){
    let reporter = require('cucumber-html-reporter');
    let options = {
            theme: 'bootstrap',
            jsonFile: '../reports/report.json',
            output: '../reports/report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            storeScreenshots: true,
            screenshotsDirectory: 'screenshots/',
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
  }
};