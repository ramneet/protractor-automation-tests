var IssuesPage = function () {

  var common = require('../e2e/common.js');
  var confParams = browser.params;

  this.issuepagetitle = element(by.xpath('//*[contains(text(),"B!Tomatin")]'));

  this.issuecardtitle = element.all(by.xpath('//*[contains(@class,"issue-card-title")]'));

  this.statistics = element.all(by.binding("option.count"));

  //this.countall = element(by.xpath('//*[contains(@data-qa-option-count,"all")]'));
  //this.countcaptured = element(by.xpath('//*[contains(@data-qa-option-count,"captured")]'));
  //this.countinprogress = element(by.xpath('//*[contains(@data-qa-option-count,"inprogress")]'));
  //this.countfixed = element(by.xpath('//*[contains(@data-qa-option-count,"fixed")]'));
  //this.countrejected = element(by.xpath('//*[contains(@data-qa-option-count,"rejected")]'));
  //this.countaccepted = element(by.xpath('//*[contains(@data-qa-option-count,"accepted")]'));

  this.getissuespage = function(){
    browser.navigate('buildings/125162908341498786/issues');
    browser.ignoreSynchronization = true;
    common.wait(this.issuecardtitle.get(1), "Issues card ");
  };

  this.editstatus = function(title, targetstatus){
    var issuelocator = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]';
    var statuslocaltor = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]/../../../div/select/option[@selected="selected"]';
    var checkboxlocaltor = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]/../../../../div/input';

    var currentstatus = element.all(by.xpath(statuslocaltor)).map(function(curstatus) {
      return curstatus.getText();
    });

    var totalitems = element.all(by.xpath(issuelocator)).count().then(function(total){
      return total;
    });

    for(var i=0; i<totalItems; i++){
        element.all(by.xpath(checkboxlocaltor)).get(i).click();
    };

    element(by.id("bulk-action-select")).click();
    parentdropdown = element(by.id("bulk-action-select"));
    parent.element(by.cssContainingText('option', targetstatus)).click();

  };

  this.verifystatus = function(title, targetstatus){
    var issuelocator = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]';
    var statuslocaltor = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]/../../../div/select/option[@selected="selected"]';
    var totalitems = element.all(by.xpath(issuelocator)).count().then(function(total){
      return total;
    });
    for(var i=0; i<totalItems; i++){
      element.all(by.xpath(statuslocaltor)).get(i).getText().then(function(observedstatus) {
          expect(observedstatus).toBe(targetstatus);
      });
    };
  };

  this.currentstatus = function(title){
    var statuslocaltor = '//div[contains(@class,"issue-card-title")][contains(text(),"' + title + '")]/../../../div/select/option[@selected="selected"]';
    var curstatus = element.all(by.xpath(statuslocaltor)).map(function(status) {
      return status.getText();
    })
    return curstatus;
  };

  this.verifystatistics = function(oldstatus){

  };

};

module.exports = IssuesPage;
