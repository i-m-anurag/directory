const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express();
const category = require('./db/category.json');
const business = require('./db/business.json');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT;

// Enable CORS
app.use(cors());

app.get('/category', (req, res) => {
    res.json(category);
})

app.get('/business', (req, res) => {
    res.json(business)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
