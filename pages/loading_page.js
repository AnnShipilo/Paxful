const EC = protractor.ExpectedConditions;
const locators = require('../helpers/element-locators');

module.exports = {
    open_test: async function(number){
        let hidden_element_test_button = element(by.css(`[href="/dynamic_loading/${number}"]`));
        let start_button = locators.start_button;

        await hidden_element_test_button.click();
        await start_button.click();
    },

    get_text_after_wait: async function(){
        let final_text = locators.final_text;
      
        await browser.wait(EC.visibilityOf(final_text, 5000));
        return final_text.getText();
    },
}
