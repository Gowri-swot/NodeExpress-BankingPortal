const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();
express.static(__dirname + '/public')

app.set('views', path.join(__dirname, '/views'))
app.set('view_engine', 'ejs')

app.get('/', function(req,res) {
    res.render('index.ejs', { title: 'Index'})
})
app.listen(5000, function() {
    console.log("Listening to port 5000.....")
})