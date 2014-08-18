var TemplatesPage = function () {

  var common = require('../e2e/common.js');

  this.pagetitle = element(by.xpath("//*[contains(text(), 'Resident Care')]"));
  this.requestcreateicon = element(by.xpath('//a[contains(@href, "care/request/create")]/i'));
  this.reportcreateicon = element(by.xpath('//a[contains(@href, "care/report/create")]/i'));

  this.existingtickettitle = element.all(by.xpath('//li/a[contains(@class, "concierge-ticket-list-item")]'));
  this.createtemplatetitle = element(by.xpath('//fieldset/div/label[contains(text(), "Template Title")]'));

  this.templatetitle = element(by.name('title'));
  this.templateinstructions = element(by.id('message-textarea'));
  this.templateassignee = element(by.id('typeaheadInput'));
  this.templatesavebutton = element(by.xpath('//button[contains(text(), "Save")]'));

  this.detailstemplatetitle =  element(by.xpath('//h1[contains(@class, "page-header-title")]'));
  this.detailstemplateinstructions =  element(by.xpath('//pre[contains(@class, "concierge-detail-instructions")]'));

  this.get = function(){
    browser.get('developments/12104040/care/templates');
    browser.ignoreSynchronization = true;
    common.wait(this.pagetitle, "Resident Care label");
  };

  this.createrequest = function(title,instructions){
    common.wait(this.requestcreateicon, "Request Create icon");
    this.requestcreateicon.click();
    this.create(title,instructions);
  };

  this.createreport = function(title,instructions){
    common.wait(this.reportcreateicon, "Report Create icon");
    this.reportcreateicon.click();
    this.create(title,instructions);
  };

  this.create = function(title,instructions){
    common.wait(this.createtemplatetitle, "Template Title label");
    this.templatetitle.sendKeys(title);
    this.templateinstructions.sendKeys(instructions);
    this.templatesavebutton.click();
    common.wait(this.pagetitle, "Resident Care label");
    var newtemplatelocator = '//li/a[contains(text(),"' + title + '")]'
    var newtemplate = element(by.xpath(newtemplatelocator));
    expect(newtemplate.getText()).toBe(title);
  };

  this.verifycreation = function(title,instructions){
    common.wait(this.existingtickettitle.get(1), "Tickets ");
    var newtemplatelocator = '//li/a[contains(text(),"' + title + '")]'
    var newtemplate = element(by.xpath(newtemplatelocator));
    //browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
      newtemplate.click();
    //})
    common.wait(this.detailstemplatetitle, "Template Title ");
    expect(this.detailstemplatetitle.getText()).toContain(title);
    expect(this.detailstemplateinstructions.getText()).toBe(instructions);
  };
};

module.exports = TemplatesPage;
