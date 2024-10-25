// import the Media class:
const Media = require('./Media')
// create your Movie class:
class Movie extends Media{
    constructor(title, genre, year, director, rating, duration){
        super(title, genre, year);
        this.director = director;
        this.rating = rating;
        this.duration = duration;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`
    }
}
// don't change below
module.exports = Movie;