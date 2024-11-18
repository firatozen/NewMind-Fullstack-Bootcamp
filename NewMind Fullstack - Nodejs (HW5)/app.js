// Importing the http module to create the server
const http = require('http');
const fs = require('fs'); // Required for reading HTML files
const path = require('path'); // Required to work with file paths

const port = 5000; // The port number where the server will listen

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Setting the response header to indicate that the content is HTML
  res.setHeader('Content-Type', 'text/html');

  // Determine the route
  let filePath;
  switch (req.url) {
    case '/hakkimda':
      filePath = path.join(__dirname, 'hakkimda.html');
      break;
    case '/iletisim':
      filePath = path.join(__dirname, 'iletisim.html');
      break;
    case '/':
      filePath = path.join(__dirname, 'index.html');
      break;
    default:
      filePath = path.join(__dirname, '404.html');
      res.statusCode = 404;
      break;
  }

  // Read the file and send the response
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.statusCode = 500;
      res.end("<h1>Server Error</h1>");
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// Listen on port 5000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
