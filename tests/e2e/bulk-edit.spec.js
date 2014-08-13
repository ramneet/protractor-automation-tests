describe('Bulk edit items and verify Status + Counts:', function() {

  var ptor;
  var confParams;
  var username;
  var password;

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
    confParams = browser.params;
  });

  it('should allow user to login successfully', function() {
    ptor.get('https://macallan-app-qa.mybazinga.com/login');
    username = confParams.login.user;
    password = confParams.login.password;
    ptor.element(by.id("email")).sendKeys(username);
    ptor.element(by.id("password")).sendKeys(password);
    element(by.xpath("//*[contains(@value, 'Sign In')]")).click();
  });

  it('should show atleast one issue in the list of issues', function() {
    var title = by.xpath('//*[contains(text(),"Please select a community")]');
    browser.wait(function() {
      return ptor.isElementPresent(title);
    }, 10000);
    ptor.get('https://macallan-app-qa.mybazinga.com/buildings/125162908341498786/issues');
    var issuestitle = by.xpath('//*[contains(text(),"B!Tomatin")]');
    browser.wait(function() {
      return ptor.isElementPresent(issuestitle);
    }, 10000);
    var issue1 = element.all(by.xpath('//*[contains(@class,"issue-card-details")]')).first();
    browser.wait(function() {
      return ptor.isElementPresent(issue1);
    }, 10000);
    expect(issue1.isDisplayed()).toBe(true);
  });



});