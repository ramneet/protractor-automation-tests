protractor-automation-tests
===========================
Setup:
------
* Install Protractor
* Install Selenium Server
* Install Jasmine

Test Scripts covered:
----------------------
These automation tests include automating tests for 2 pages:
* Search and bulk edit with verification in https://macallan-app-qa.mybazinga.com/buildings/125162908341498786/issues
  * Log in
  * Go to the page
  * Select a few items in the list
  * Choose an action in the bulk action select
  * Verify that the items status change and the counts on the side updated correctly.
* creation of a template with assignee and attachment in https://macallan-app-qa.mybazinga.com/developments/12104040/care/templates
  * Go to the page
  * Click on the create template icon
  * Create a template with all the fields filled
  * Verify that the template has been created

Test Parameters:
-----------
All basic assumptions and parameters have been defined in protractor.conf.js file.
Make sure all values are valid before executing the tests.

Executing the tests:
--------------------
Assuming,
* Protractor, Selenium and Jasmine have been installed in folder: "bazinga-automation-test"
* And the files heirarchy is kept same as in this github repo

Run the tests using following commands:
* ./node_modules/protractor/bin/protractor tests/e2e/protractor.conf.js --suite login
* ./node_modules/protractor/bin/protractor tests/e2e/protractor.conf.js --suite edit  (This hasnt been verified since the test data wasnt available.)
* ./node_modules/protractor/bin/protractor tests/e2e/protractor.conf.js --suite createtemplate
