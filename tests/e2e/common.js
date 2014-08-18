describe('Common', function() {

  exports.wait = function (element, label) {
    browser.wait(function () {
        browser.sleep(500);
        return element.isPresent().then(function(state){
            return state == true
        });
    }, 60000, label + " did not load")
  }

});