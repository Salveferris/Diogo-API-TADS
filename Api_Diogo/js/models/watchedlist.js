class Watchedlist {
  constructor(){
    this.localName = "Watchedlist"
    this.localMovies = JSON.parse(localStorage.getItem(this.localName))
  }

  create(id) {
    new Create(this.localName, this.localMovies, id)
  }

  getWatchedlist() {
    return this.localMovies
  }

  remove(id) {
    new Remove(this.localName, this.localMovies, id)
  }
}