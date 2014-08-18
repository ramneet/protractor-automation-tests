describe('Bulk edit items and verify Status + Counts:', function() {

  var issuespage;
  var issues_page = require('../pages/issues.page.js');
  var confParams = browser.params;

  beforeEach(function () {
    issuespage = new issues_page();
  });

  it('should show issue card details in the list of issues', function() {
    issuespage.getissuespage();
    //issuespage.verifystatistics(confParams.stats.combined);
  });

  it('should edit the status of the issues and verify status and statistics', function(){
    issuespage.getissuespage();
    //var oldstatus = issuespage.getcurrentstatus(confParams.issues.issuetitle);
    issuespage.editstatus(confParams.issues.issuetitle, confParams.issues.targetstatus);
    issuespage.verifystatus(confParams.issues.issuetitle, confParams.issues.targetstatus);
    //issuespage.verifystatistics(oldstatus);
  });

});