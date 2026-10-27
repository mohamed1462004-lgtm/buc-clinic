const express = require('express');
const cors = require('cors');

const userRoutes = require('./modules/Auth/auth.routes');

const app = express();

// 1. Global Middlewares
app.use(cors());
app.use(express.json());

// 2. Module Routes
app.use('/api/v1/auth', userRoutes);

module.exports = app; 