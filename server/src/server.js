require('dotenv').config();
const express = require('express');
const cors = require('cors');
const recipesRouter = require('./controllers/recipes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/recipes', recipesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
