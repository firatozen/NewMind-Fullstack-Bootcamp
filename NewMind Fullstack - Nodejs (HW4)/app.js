// app.js

const fs = require('fs'); // Import the fs (File System) module

const filePath = './employees.json'; // Path to the employees.json file

// CREATE: Add employee data to the JSON file
function createEmployee() {
  const employeeData = {
    name: 'Employee 1 Name',
    salary: 2000
  };

  // Convert the employee data to a JSON string and save it to the file
  fs.writeFile(filePath, JSON.stringify(employeeData, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Employee data created and saved.");
      readEmployee();  // Read data after creation
    }
  });
}

// READ: Read and display employee data from the JSON file
function readEmployee() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    } else {
      console.log("Employee Data:", JSON.parse(data));
      updateEmployee(); // Update data after reading
    }
  });
}

// UPDATE: Modify the employee data (e.g., update the salary)
function updateEmployee() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file for update:", err);
    } else {
      const employee = JSON.parse(data);
      employee.salary = 2500; // Update the salary field

      // Save the updated data back to the file
      fs.writeFile(filePath, JSON.stringify(employee, null, 2), (err) => {
        if (err) {
          console.error("Error updating the file:", err);
        } else {
          console.log("Employee data updated.");
          readUpdatedEmployee(); // Read the updated data
        }
      });
    }
  });
}

// READ: Read the updated employee data after updating
function readUpdatedEmployee() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file after update:", err);
    } else {
      console.log("Updated Employee Data:", JSON.parse(data));
      deleteEmployee(); // Delete the employee data after displaying the updated version
    }
  });
}

// DELETE: Delete the employees.json file
function deleteEmployee() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting the file:", err);
    } else {
      console.log("Employee data deleted.");
    }
  });
}

// Run the create function to start the CRUD process
createEmployee();
