exports.config = {
  SeleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://macallan-app-qa.mybazinga.com/',
  suites: {
    login: './tests/e2e/login.spec.js',
    edit: './tests/e2e/bulk-edit.spec.js',
    createtemplate: './tests/e2e/create-template.spec.js'
  },
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('outputdir/', true, true));
  },
  onComplete: function() {
    browser.close();
  },
  params: {
    credentials: {
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