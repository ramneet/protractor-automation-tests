var LoginPage = function () {

  var common = require('../e2e/common.js');

  this.pagetitle = element(by.xpath("//*[contains(text(), 'Please select a community')]"));
  this.whatisbazinga = element(by.xpath("//*[contains(text(), 'What is bazinga?')]"));
  this.usernamefield = element(by.id("email"));
  this.passwordfield = element(by.id("password"));
  this.signinbutton = element(by.xpath("//*[contains(@value, 'Sign In')]"));

  this.issuetitle = element(by.xpath('//*[contains(text(),"B!Tomatin")]'));

  this.get = function(){
    browser.get('');
    browser.ignoreSynchronization = true;
    common.wait(this.whatisbazinga, "What is bazinga? label");
  };

  this.setusername = function(username){
    this.usernamefield.sendKeys(username);
  };

  this.setpassword = function(password){
    this.passwordfield.sendKeys(password);
  };

  this.signin = function(){
    this.signinbutton.click();
    common.wait(this.pagetitle, "Please select a community label");
  };

};

module.exports = LoginPage;
