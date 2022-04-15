const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

const quizRoutes = require('./routes/quiz');

const uri = process.env.MONGODB_URI;
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB database connection established successfully!'))

app.use(express.json()) 
app.use('/quiz', quizRoutes);
app.listen(PORT, () => console.log(`Quizler server is listening on port ${PORT}`));
