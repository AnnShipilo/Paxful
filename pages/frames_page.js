const positions = require('../test-data/frame_positions.js')
const locators = require('../helpers/element-locators')

module.exports = {
    get_first_layer_frame_text: function (position){
  
      const { firstPosition } = positions.frame_position[position];
  
      browser.switchTo().frame(firstPosition)
      let frame_text = element(locators.frame_text_placeholder).getText()
      return frame_text
    },
  
    get_second_layer_frame_text: function (position){
    
      const { firstPosition, secondPosition } = positions.frame_position[position];
        
      browser.switchTo().frame(firstPosition)
      browser.switchTo().frame(secondPosition)
      let frame_text = element(locators.frame_text_placeholder).getText()
      return frame_text
    }
}
