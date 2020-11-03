const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/repositoryRoutes'));

const PORT = 5000;

app.listen(PORT,
  console.log(`Server running on port ${PORT}`)
);