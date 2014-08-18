exports.config = {
  SeleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://macallan-app-qa.mybazinga.com/',
  suites: {
    login: './login.spec.js',
    edit: ['./login.spec.js', './bulk-edit.spec.js'],
    createtemplate: ['./login.spec.js', './create-template.spec.js']
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
    },
    issues: {
      issuetitle: '1001 Bathroom',
      targetstatus: 'Fixed'
    },
    template: {
      title: '_Title ',
      instructions: '_Instructions '
    }
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: true,
    includeStackTrace: true,
    showColors: true
  }
}