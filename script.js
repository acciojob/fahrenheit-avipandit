function toFahrenheit(celsius) {
  // Check the input temperature value
  if (celsius < -273.15 || celsius > 10^9) {
    throw new Error("Invalid temperature value");
  }

  // Calculate the Fahrenheit temperature
  var fahrenheit = celsius * 9 / 5 + 32;

  // Round the Fahrenheit temperature to two decimal places
  fahrenheit = Math.round(fahrenheit * 100) / 100;

  // Return the Fahrenheit temperature
  return fahrenheit;
}
var fahrenheit = toFahrenheit(0); // 32.00
var fahrenheit = toFahrenheit(25); // 77.00
var fahrenheit = toFahrenheit(-10); // 14.00