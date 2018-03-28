const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoDB = 'mongodb://localhost/shopping-cart';

app.use('/api', require('./controllers'));

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => console.log('MongoDB connection error'));
db.on('connected', () => console.log('Connected to database'));
db.on('disconnected', () => console.log('Disconnected from database'));

app.listen(8000, () => console.log('Listening on port 8000'));
