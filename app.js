const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');
var app = express();
//setup template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));

//fire controllers 
todoController(app);

//listen to port
app.listen(3000);