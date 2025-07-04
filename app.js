const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products'); // Importing the product routes

// Use the product routes first
app.use('/products', productRoutes); // Using the product routes 

// This middleware should be placed after the routes
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

module.exports = app;


/*
const express = require('express');
const app = express();


const productRoutes = require('./api/routes/products');//Importing the product routes
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});
app.use('/products', productRoutes); //Using the product routes 


module.exports = app;

*/