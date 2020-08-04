const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var urlencoder = bodyParser.urlencoded({ extended: false });

var data = [{ item: 'get milk' }
    , { item: 'go walk' }
    , { item: 'have some sleep' }
    , { item: 'make brownie' }]
module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', { todoList: data });
    });
    app.post('/todo', urlencoder, function (req, res) {
        data.push(req.body);
        res.json(data);

    });
    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return todo.item !== req.params.item;
        });
        res.json(data);
        console.log(req.params.item);
    });

};