const express = require('express');
const path = require('path');

const PORT = 3000;

const STATIC = path.resolve(__dirname, 'dist');
const INDEX = path.resolve(STATIC, 'index.html');

const app = express();

// Static content
app.use(express.static(STATIC));

// All GET request handled by INDEX file
app.get('*', function (req, res) {
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  console.log('Server up and running on ', `http://localhost:${PORT}/`);
});