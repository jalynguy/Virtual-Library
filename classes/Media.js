// create your Media class:
class Media{
    static totalMediaCount;
    constructor(title, genre, year){
        this.title = title;
        this.genre = genre;
        this.year = year;
        Media.totalMediaCount++;
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }
}
// uncomment below to export it:
module.exports = Media;
