'use strict';

//Based on https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb

// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product.route'); // Imports routes for the products
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://dbuser:dbuser12345@ds125453.mlab.com:25453/product-db';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

var port = 1234;

app.listen(port, function () {
    console.log('Server is up and running on port numner ' + port);
});
//# sourceMappingURL=app.js.map