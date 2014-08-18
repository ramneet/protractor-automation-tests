describe('Login page:', function() {

  var page;
  var LoginPage = require('../pages/login.page.js');
  var confParams = browser.params;

  beforeEach(function () {
    page = new LoginPage();
  });

  it('should login the user successfully', function() {
    page.get();
    page.setusername(confParams.credentials.user);
    page.setpassword(confParams.credentials.password);
    page.signin();
  });

});