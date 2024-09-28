const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
app.use(express.json());

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from node api');
});



mongoose.connect("mongodb+srv://7370:admin@cluster0.xqmsd.mongodb.net/crud-api?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("connection failed");
});