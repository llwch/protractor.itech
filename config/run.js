var env = require('./environment.js');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: env.seleniumAddress,
  specs: ['../step_definitions/login/freelancer.js'],
  capabilities: env.capabilities,
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
    }
  
}