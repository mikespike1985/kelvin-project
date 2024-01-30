//set a variable for the kelvin value. This will remain constant
const kelvin = 293;

//set a variable for the celsius value
var celsius = kelvin - 273;

//set a variable for the Farenheit value
var fahrenheit = celsius * (9/5) + 32;

//Round the farenheit variable
fahrenheit = Math.round(fahrenheit);

//Output the result of the fahrenheit variable
console.log(`The temperature is ${fahrenheit} degrees in Farenheit`);
