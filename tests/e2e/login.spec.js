describe('Login page:', function() {

  browser.ignoreSynchronization = true;

  it('should have a Sign in button', function() {
      browser.get('https://macallan-app-qa.mybazinga.com/login');
      expect(element(by.xpath("//*[contains(@value, 'Sign In')]")).isDisplayed()).toBe(true);
  });

});