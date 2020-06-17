const path = require('path');
const dropFile = require('../helpers/d-n-d-file');
const waiters = require('../helpers/wait');
const locators = require('../helpers/element-locators');

module.exports = {
    upload_file: async function(path_toFile){
        file_path = path.join(__dirname, '../test-data/' + path_toFile);
        let absolutePath = path.resolve(__dirname, file_path);
        let upload_input = locators.upload_input;
        let upload_button = locators.upload_button;
        await upload_input.sendKeys(absolutePath);
        await upload_button.click();
    },

    read_file_name: function(){
        let uploaded_file = locators.uploaded_files;
        return uploaded_file.getText();
    },

    dragAndDrop: function(path_toFile){
        file_path = path.join(__dirname, '../test-data/' + path_toFile)
        dropFile(locators.drag_n_drop_button, file_path);
    	waiters.display_wait(locators.uploaded_file_name);
    }
}
