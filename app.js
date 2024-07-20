/**
 * Build a Library
    Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, 
    which is in dire need of your help. They’re still using index cards to organize their content! Yikes.
    But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.
    Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
    In this project you will create a parent class named Media with three subclasses: 
    Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
 */

class Midia {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    set title(newTitle){
      this._title = newTitle;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
  
    addRating(rating){
      this._ratings.push(rating);
    }
  
    getAverageRating(){
    
      let totalRating = this._ratings.reduce(
        (accumulator,currentValue) => accumulator + currentValue
        );
     
      let average = Math.floor(totalRating/this._ratings.length);
      
      return average;
    }
  
     toggleCheckOutStatus(){
       this._isCheckedOut = !this._isCheckedOut; 
     }
  }
  
  class Book extends Midia{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    set author(newAuthor){
      this._author = newAuthor;
    }
   
     get pages(){
      return this._pages;
    }
  
    set pages(newPages){
      this._pages = newPages;
    }
  
  }
  
  class Movie extends Midia{
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
     get director(){
      return this._director;
    }
  
     set director(newDirector){
      this._director = newDirector;
    }
  
    get runTime(){
      return this._runTime;
    }
  
    set runTime(newRuntime){
      this._runTime = newRuntime;
    }
  }
  
  class CD extends Midia{
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist(){
      return this._artist;
    }
  
    set artist(newArtist){
      this._artist = artist;
    }
  
    get songs(){
      return this._songs;
    }
  
    set songs(newSong){
      this._songs.push(newSong);
    }
  }

  //Class tests
  
  const theFameMonster = new CD('Lady Gaga', 'The Fame Monster', ['poker face', 'bad romance', 'just dance', 'alejandro', 'love game', 'paparazzi']); 
  
  theFameMonster.addRating(6.8);
  theFameMonster.addRating(9.5);
  theFameMonster.addRating(3.9);
  theFameMonster.addRating(8.8);
  
  console.log(theFameMonster.getAverageRating())
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);