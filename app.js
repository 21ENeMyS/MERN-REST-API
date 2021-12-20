const express = require('express');
const app = express();
const cors = require('cors');
// memanggil routes di folder routes
const router = require('./app/routes/todo.routes');
const port = 8000;

// koneksi database
require('../api/config/db');

app.use(cors());
// panggil router
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})