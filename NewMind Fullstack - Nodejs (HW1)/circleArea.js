// circleArea.js

// Import the built-in 'process' module for accessing command-line arguments
const radius = parseFloat(process.argv[2]);  // Get the radius from the command-line arguments

// Check if the radius is a valid number
if (isNaN(radius) || radius <= 0) {
  console.log("Lütfen geçerli bir pozitif sayı girin.");
} else {
  // Calculate the area of the circle
  const area = Math.PI * Math.pow(radius, 2);
  
  // Output the result
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}
