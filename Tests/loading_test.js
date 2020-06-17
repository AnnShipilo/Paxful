const loading_page = require('../pages/loading_page');
const locators = require('../helpers/element-locators');

describe('Dynamic loading tests', function() {

    const address = 'https://the-internet.herokuapp.com/dynamic_loading';
    const text_result = 'Hello World!';
    const loader = locators.loader;

    it('Element on page that is hidden', async function(){
    	browser.get(address);
    	await loading_page.open_test(1);

        expect(loader.isDisplayed()).toBe(true);
    	expect(loading_page.get_text_after_wait()).toEqual(text_result);
    });

    it('Element rendered after the fact', async function(){
    	browser.get(address);
    	await loading_page.open_test(2);
        
        expect(loader.isDisplayed()).toBe(true);
    	expect(loading_page.get_text_after_wait()).toEqual(text_result);
    });
});
