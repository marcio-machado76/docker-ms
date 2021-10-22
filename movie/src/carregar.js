const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const Movie = require('./model/movie');

exports.carregar = () => {

    const caminho = path.resolve(__dirname, 'movies.yaml');

    Movie.find({}, (err, movies) => {
            
        if (err) {
            res.statusCode = 500;
            return res.json(err);
        }       

        if (movies.length == 0) {
            const objects = yaml.load(fs.readFileSync(caminho, 'utf8'));

            Movie.insertMany(objects.movies,(error) => {
                if (error) {
                    console.log('Erro ao popular o MongoDB.');
                } else {
                    console.log('MongoDB populado com sucesso.');
                }
            });
        }    
    });
}