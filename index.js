const fs = require('fs');
const data = require('./order.json')
const express = require('express');
const app = express();

fs.readFile(data, function(err, data) { 
    if (err) throw err; 
    const ParsedData = JSON.parse(data); 
    console.log(ParsedData);
});
