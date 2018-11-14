class WatchedlistController {
  constructor() {
    this.watchedlist = new Watchedlist()
    this.listToWatch = this.watchedlist.getWatchedlist()
    this._view = new MoviesCardView
  }

  addToWatchedlist(id) {
    let watchlist = new Watchlist()
    let getWatchlist = watchlist.getWatchlist()
    if (getWatchlist != null && getWatchlist.includes(id)) {
      console.log("remove")
      watchlist.remove(id)
    }
    this.watchedlist.create(id)
  }

  getWatchedlist() {
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

  removeFromWatchedlist(id) {
    this.watchedlist.remove(id)
  }
}