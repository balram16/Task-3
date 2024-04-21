function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelector = document.getElementById("unitSelector");
    var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    
    // Check if temperature input is a number
    if (!isNaN(temperatureInput)) {
      if (selectedUnit === "celsius") {
        var fahrenheit = parseFloat(temperatureInput) * 9/5 + 32;
        var kelvin = parseFloat(temperatureInput) + 273.15;
        document.getElementById("convertedTemperature").innerHTML = fahrenheit.toFixed(2) + "°F / " + kelvin.toFixed(2) + "K";
      } else if (selectedUnit === "fahrenheit") {
        var celsius = (parseFloat(temperatureInput) - 32) * 5/9;
        var kelvin = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
        document.getElementById("convertedTemperature").innerHTML = celsius.toFixed(2) + "°C / " + kelvin.toFixed(2) + "K";
      } else if (selectedUnit === "kelvin") {
        var celsius = parseFloat(temperatureInput) - 273.15;
        var fahrenheit = parseFloat(temperatureInput) * 9/5 - 459.67;
        document.getElementById("convertedTemperature").innerHTML = celsius.toFixed(2) + "°C / " + fahrenheit.toFixed(2) + "°F";
      }
    } else {
      alert("Please enter a valid temperature!");
    }
  }
  