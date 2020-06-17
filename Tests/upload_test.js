const upload_page = require('../pages/upload_page.js');
const locators = require('../helpers/element-locators');

describe('Upload tests', function() {
	const address = 'https://the-internet.herokuapp.com/upload';
	const file = 'fileForTests.txt';

	it('Upload with button', async function() {
    	browser.get(address);
    	await upload_page.upload_file(file);
    	let result_text = upload_page.read_file_name();

    	expect(result_text).toEqual(file);
	});

	it('Should drop a file to a drop area', function() {
		browser.get(address);
		upload_page.dragAndDrop(file);
		
    	expect((locators.uploaded_file_name).getText()).toEqual(file);
    	expect((locators.success_tick).isDisplayed()).toBe(true);
	});
});
