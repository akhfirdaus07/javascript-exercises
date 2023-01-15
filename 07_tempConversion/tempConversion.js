const convertToCelsius = function(temperature) {
  temperature = Math.round((temperature -32) *5/9*10)/10;
  return temperature;
};

const convertToFahrenheit = function(temperature) {
  temperature = Math.round(((temperature*9/5)+32) *10)/10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
