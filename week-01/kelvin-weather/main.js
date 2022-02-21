const kelvin = 293;
let celsius = kelvin - 273; // Since Kelvin is temperature is 273 points more than degree celsius for the same value, we subtract 273 from kelvin to get the value of celsius
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.round(fahrenheit); //  rounded the value to the nearest integer
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
