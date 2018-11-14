class Watchlist {
  constructor(){
    this.localName = "Watchlist"
    this.localMovies = JSON.parse(localStorage.getItem(this.localName))
  }

  create(id) {
    new Create(this.localName, this.localMovies, id)
  }

  getWatchlist() {
    return this.localMovies
  }

  remove(id) {
    new Remove(this.localName, this.localMovies, id)
  }
}