const { builtinModules } = require("module");

module.exports = {
    frame_text_placeholder: by.css(`body`),
    uploaded_file_name: $(".dz-complete .dz-filename"),
    loader: element(by.css('div #loading')),
    success_tick: $(".dz-complete .dz-success-mark"),
    drag_n_drop_button: $("#drag-drop-upload"),
    upload_input: element(by.id('file-upload')),
    upload_button: element(by.id('file-submit')),
    uploaded_files: element(by.id('uploaded-files')),
    start_button: element(by.css('#start > button')),
    final_text: element(by.id('finish'))
}
