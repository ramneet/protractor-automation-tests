exports.config = {
  SeleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  specs: ['./specs/*.spec.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://macallan-app-qa.mybazinga.com/buildings/125162908341498786/issues',
  jasmineNodeOpts: {
    showColors: true
  }
}