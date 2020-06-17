const frames_page = require('../pages/frames_page');

describe('Testing frames', function() {

    const address = 'https://the-internet.herokuapp.com/nested_frames';

    it('Left frame text', function() {
        browser.get(address);
        let frame_text = frames_page.get_second_layer_frame_text("left");
      
        expect(frame_text).toEqual("LEFT");
    });
  
    it('Middle frame text', function() {
        browser.get(address);
        let frame_text = frames_page.get_second_layer_frame_text("middle");
      
        expect(frame_text).toEqual("MIDDLE");
    });
  
    it('Right frame text', function() {
        browser.get(address);
        let frame_text = frames_page.get_second_layer_frame_text("right");
      
        expect(frame_text).toEqual("RIGHT");
    });
  
    it('Bottom frame text', function() {
        browser.get(address);
        let frame_text = frames_page.get_first_layer_frame_text('bottom');
      
        expect(frame_text).toEqual("BOTTOM");
    });
  });