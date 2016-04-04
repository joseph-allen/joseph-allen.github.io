function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (0);
}

function setPercentages(sliderValue){
  var femalePercentage = document.getElementById('femalePercentage');
  femalePercentage.innerHTML = sliderValue + '% Woman';

  var malePercentage = document.getElementById('malePercentage');
  malePercentage.innerHTML = 100 - sliderValue + '% Man';
}

var sliderValue = window.location.hash.substr(1);

var genderSlider = document.getElementById('genderSlider');
genderSlider.value = sliderValue;

genderSlider.onmousemove = function(e) {
  window.location.hash = '#' + genderSlider.value;
  updateColours(genderSlider.value);
  setPercentages(genderSlider.value);
};

genderSlider.onchange = function(e) {
  window.location.hash = '#' + genderSlider.value;
  updateColours(genderSlider.value);
  setPercentages(genderSlider.value);
};
