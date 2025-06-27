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