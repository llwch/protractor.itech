var env = require('./environment.js');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: env.seleniumAddress,
  specs: ['../spec/freelancer/freelancer.js'],
  capabilities: env.capabilities,
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
    }
  
}