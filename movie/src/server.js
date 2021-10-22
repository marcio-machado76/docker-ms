const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./model/movie');
const bodyParser = require('body-parser');
const carregar = require('./carregar');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/imagensfilme', express.static('imagensfilme'));

app.get('/api/movie', (req, res) => {
    Movie.find({}, (err, movie) => {
        
        if (err) {
            res.statusCode = 500;
            return res.json(err);
        }       

        res.json(movie);
    });
});

app.get('/api/movie/:id', (req, res) => {
    Movie.findById(req.params.id, function (err, movie) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.json(movie);
    })
});

app.post('/api/movie', (req, res) => {

    var movie = new Movie(
        {
            title: req.body.title,
            summary: req.body.summary,
            duration: req.body.duration,
            release: req.body.release,
            category: req.body.category,
            cast: req.body.cast,
            director: req.body.director,
            thumb: req.body.thumb,
        }
    );

    movie.save(function (err, movieResult) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }

        res.statusCode = 201;
        res.json(movieResult)
    })
});

app.put('/api/movie/:id', (req, res) => {

    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, movie) => {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    });
});

app.delete('/api/movie/:id', (req, res) => {

    Movie.findByIdAndRemove(req.params.id, (err) => {
                
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    })
});

app.get('/health', (res, req) => {
    let healthResult = serverStatus();
    if (mongoose.connection.readyState == 0) {
        req.statusCode = 500;
        req.send('down');
    } else {
        req.json(healthResult);
    }
});

var developer_db_url = 'mongodb://mongouser:mongopwd@localhost:27017/admin';
var mongoUrl = process.env.MONGODB_URI || developer_db_url;

mongoose.Promise = global.Promise;

var connectWithRetry = function () {
    return mongoose.connect(mongoUrl, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        } else {
            carregar.carregar();
        } 
    });
};

connectWithRetry();

app.listen(8181, () => {
    console.log('Servidor rodando na porta 8181');
});