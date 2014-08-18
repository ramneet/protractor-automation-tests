describe('Create Template:', function() {

  var page;
  var TemplatesPage = require('../pages/templates.page.js');
  var confParams = browser.params;

  beforeEach(function () {
    page = new TemplatesPage();
  });

  it('should create the report successfully', function() {
    page.get();
    var currentdatetime = new Date();
    var title = confParams.template.title + currentdatetime;
    var instructions = confParams.template.instructions + currentdatetime;
    page.createreport(title,instructions);
    page.verifycreation(title,instructions);
  });

  it('should create the request successfully', function() {
    page.get();
    var currentdatetime = new Date();
    var title = confParams.template.title + currentdatetime;
    var instructions = confParams.template.instructions + currentdatetime;
    page.createrequest(title,instructions);
    page.verifycreation(title,instructions);
  });



});