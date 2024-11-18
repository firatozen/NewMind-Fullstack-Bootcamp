// index.js

// Import the circle.js module using require and object destructuring
const { circleArea, circleCircumference } = require("./circle");

// Define the radius for the circle
const radius = 5;
const unit = "cm";  // You can change this to "m" or "inch" for different units

try {
  // Calculate area and circumference using the imported functions
  const area = circleArea(radius, unit);
  const circumference = circleCircumference(radius, unit);

  // Output the results to the console
  console.log(`Yarıçapı ${radius} ${unit} olan dairenin alanı: ${area.toFixed(2)} ${unit}²`);
  console.log(`Yarıçapı ${radius} ${unit} olan dairenin çevresi: ${circumference.toFixed(2)} ${unit}`);
} catch (error) {
  console.error("Hata:", error.message);
}
