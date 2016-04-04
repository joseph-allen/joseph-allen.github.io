function getRGBValue(colour, femaleOrMaleValue) {
  return Math.floor(255 - ((femaleOrMaleValue * (255 - colour)) / 50));
}

function updateColours(sliderValue) {
  var Blue = [173, 216, 230];
  var Pink = [255, 182, 193];
  var backColour = [255, 255, 255];

  if (sliderValue < 50) {
    var ManValue = 50 - sliderValue;
    backColour = Blue.map(function(colour) {
      return getRGBValue(colour, ManValue);
    });
  }

  if (sliderValue >= 50) {
    var WomanValue = sliderValue - 50;
    backColour = Pink.map(function(colour) {
      return getRGBValue(colour, WomanValue);
    });
  }
  
  var output = RGB2HTML(backColour[2], backColour[1], backColour[0]);
  function RGB2HTML(red, green, blue) {
    var decColor = red + 256 * green + 65536 * blue;
    return decColor.toString(16);
  }
  document.body.style.backgroundColor = output;
}
var sliderValue = window.location.hash.substr(1);
updateColours(sliderValue);