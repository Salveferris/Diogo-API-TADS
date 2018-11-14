class MoviesCardView {
  constructor() {
    let watchlist = new Watchlist()
    this.watchlist = watchlist.getWatchlist()
    let watchedlist = new Watchedlist()
    this.watchedlist = watchedlist.getWatchedlist()
    this._trending = document.querySelector("#trendings")
  }

  render(movies) {
    var add = this._trending.innerHTML;
    if (movies.constructor === Array) {
      for(let i = 0; i < movies.length; i ++){
        add = add + this.template(movies[i].title, movies[i].poster_path, movies[i].id)
      }
    } else {
      add = add + this.template(movies.title, movies.poster_path, movies.id)
    }

    this._trending.innerHTML = add;
  }

  template(title, poster, id) {
    return "<div class='col-3 movies mb-5 class" + id + "'>"+
             "<h5>" + title + "</h5>"+
             "<img src='" + IMAGE_URL + poster + "'><br>"+
              this.btnWatchlist(id) +
              this.btnWatchedlist(id)+
           "</div>"
  }

  btnWatchlist(id){
    if (this.watchlist == null || !this.watchlist.includes(""+id)) {
      return "<button class='btn btn-light mt-1' id='" + id + "' onclick='addToWatchlist(this.id)'>Quero assistir</button>"
    } else {
      return "<button class='btn btn-dark mt-1' id='" + id + "' onclick='removeFromWatchlist(this.id)'>Remover</button>"
    }
  }

  btnWatchedlist(id){
    if (this.watchedlist == null || !this.watchedlist.includes(""+id)) {
      return "<button class='btn btn-success mt-1' id='" + id + "' onclick='addToWatchedlist(this.id)'>Ja assisti</button>"
    } else {
      return "<button class='btn btn-danger mt-1' id='" + id + "' onclick='removeFromWatchedlist(this.id)'>Remover</button>"
    }
  }
}
