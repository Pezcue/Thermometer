const kelvin = 0;
// this is todays forecast for kelvin

let celcius = kelvin - 273;

let Newton = celcius*(33/100);
Newton = Math.floor(Newton);

// celcius equals kevin minus 273

var fahrenheit = celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// calculus for fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${celcius} degrees celcius and ${kelvin} kelvin`);

console.log(`The temperature is ${Newton} newton.`)