const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const connectDB = require('./config/connectDB');
//config dotenv file
dotenv.config();

//connect to database
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// user routes
app.use("/api/v1/users", require('./routes/userRoutes'));

//transaction routes
app.use("/api/v1/transactions", require('./routes/transactionRoutes'));

// static files
app.use(express.static(path.join(__dirname, './client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

//port
const PORT = process.env.PORT || 5000;

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});