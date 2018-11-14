class WatchlistController {
  constructor() {
    this.watchlist = new Watchlist()
    this.listToWatch = this.watchlist.getWatchlist()
    this._view = new MoviesCardView
  }

  addToWatchlist(id) {
    let watchedlist = new Watchedlist()
    let getWatchedlist = watchedlist.getWatchedlist()
    if (getWatchedlist == null || !getWatchedlist.includes(id)) {
      this.watchlist.create(id)
    }
  }

  getWatchlist() {
    let self = this
    for (let j = 0; j < this.listToWatch.length; j++) {
      let httpCliente = new XMLHttpRequest();
      httpCliente.open('GET', BASE_URL + '/3/movie/'+ self.listToWatch[j] +'?api_key=' + API_KEY)
      httpCliente.onreadystatechange = function() {
        if(httpCliente.readyState == 4){
          var resposta = JSON.parse(httpCliente.responseText);
          self._view.render(resposta)
        }
      }
      httpCliente.send();
    }
  }

  removeFromWatchlist(id) {
    this.watchlist.remove(id)
  }
}