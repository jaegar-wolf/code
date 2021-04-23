class Media {
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(newisCheckedOut){
    this._isCheckedOut = newisCheckedOut;
  }
  getAverageRating(){
    let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const ratingLength = this.ratings.length;
    return ratingSum / ratingLength;
  }
  addRating(rating){
    if(rating >= 1 && rating <= 5){
    this.ratings.push(rating);
    }
    else{
      return 'Rating should be between 1 and 5';
    }
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
}

class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class CD extends Media {
  constructor (artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  addSong(song){
    this.songs.push(song);
  }
  shuffle(){
    let randomSong = Math.floor(Math.random() * this.songs.length);
    return this.songs[randomSong];
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());