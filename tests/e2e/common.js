describe('Common', function() {

  var ptor = protractor.getInstance();
  var confParams = browser.params;
  var username;
  var password;

  var login = function(){
    ptor.get('https://macallan-app-qa.mybazinga.com/login');
    var loginpageelement = by.xpath("//*[contains(text(), 'What is bazinga?')]");
    browser.wait(function() {
      return ptor.isElementPresent(loginpageelement);
    }, 10000);
    if(ptor.element(by.xpath("//*[contains(text(), 'What is bazinga?')]")).isDisplayed()){
        username = confParams.credentials.user;
        password = confParams.credentials.password;
        ptor.element(by.id("email")).sendKeys(username);
        ptor.element(by.id("password")).sendKeys(password);
        element(by.xpath("//*[contains(@value, 'Sign In')]")).click();
    }
  }

  exports.login = login;

});