const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app'); // Import the app from app.js
const server = http.createServer();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});