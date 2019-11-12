const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const catDetails = require('./mock/cat_db.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Get existing challenge details
app.get('/getCatDetails', (req, resp) => {
    resp.send(catDetails);
})

app.listen('8081', () => {
    console.log("server listening to the port 8081:");
})