// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node server!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
