var mongoose = require('mongoose');

var states = 'todo doing done abandoned'.split(' ');

var Schema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, select: false},
    date: {type: Date, default: Date.now},
    state: {type: String, enum: ['todo','doing', 'done', 'abandoned'], default: "todo"}
},{strict: true} );

module.exports = mongoose.model('ToDo', Schema);
