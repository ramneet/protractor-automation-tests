describe('Bulk edit items and verify Status + Counts:', function() {

  var ptor;
  var common = require('./common.js');

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
  });

  it('should show atleast one issue in the list of issues', function() {
    common.login();
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