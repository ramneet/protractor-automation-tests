describe('Login page:', function() {

  var ptor;
  var common = require('./common.js');

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
  });

  it('should have a Sign in button', function() {
      ptor.get('https://macallan-app-qa.mybazinga.com/login');
      expect(element(by.xpath("//*[contains(@value, 'Sign In')]")).isDisplayed()).toBe(true);
  });

  it('should allow user to login successfully', function() {
    common.login();
  });

});