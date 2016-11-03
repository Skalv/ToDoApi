var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, select: false},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('ToDo', Schema);
