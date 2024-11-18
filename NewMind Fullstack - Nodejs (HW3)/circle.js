// circle.js

// Function to calculate the area of a circle
function circleArea(radius, unit = "cm") {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number.");
    }
  
    const area = Math.PI * Math.pow(radius, 2);
  
    // Optional: Convert to different units (e.g., meters, inches)
    const unitConversions = {
      cm: area, // cm^2
      m: area / 100, // m^2 (convert cm^2 to m^2)
      inch: area / 6.4516, // in^2 (convert cm^2 to inch^2)
    };
  
    return unitConversions[unit] || area;
  }
  
  // Function to calculate the circumference of a circle
  function circleCircumference(radius, unit = "cm") {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number.");
    }
  
    const circumference = 2 * Math.PI * radius;
  
    // Optional: Convert to different units
    const unitConversions = {
      cm: circumference, // cm
      m: circumference / 100, // meters
      inch: circumference / 2.54, // inches
    };
  
    return unitConversions[unit] || circumference;
  }
  
  // Export the functions using module.exports
  module.exports = {
    circleArea,
    circleCircumference,
  };
  