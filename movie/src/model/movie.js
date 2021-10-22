
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {type: String, required: true, max: 50},
    summary: {type: String, required: true, max: 100},
    duration: {type: String, required: true, max: 30},
    release: {type: String, required: true, max: 30},
    category: {type: String, required: true, max: 30},
    cast: {type: String, required: true, max: 30},
    director: {type: String, required: true, max: 30},
    slide: {type: String, required: true, max: 30},
    thumb: {type: String, required: true, max: 30},
});

module.exports = mongoose.model('Movie', MovieSchema);