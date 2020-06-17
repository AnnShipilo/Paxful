const EC = protractor.ExpectedConditions;
const timing = 5000;

module.exports = {
    display_wait: function(element){
    browser.wait(EC.visibilityOf(element), timing);
    },
}
