exports.config = {
  SeleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://macallan-app-qa.mybazinga.com/buildings/125162908341498786/issues',
  suites: {
    login: './specs/login.spec.js',
    edit: './specs/bulk-edit.spec.js',
    createtemplate: './specs/create-template.spec.js'
  },
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('outputdir/', true, true));
  },
  onComplete: function() {
    browser.close();
  },
  params: {
    login: {
      user: 'david.go-jan10dev@mybazinga.test',
      password: 'password'
    }
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: true,
    includeStackTrace: true,
    showColors: true
  }
}