API_KEY = "8438379350a22f825cc34dc25d25b700"
BASE_URL = "https://api.themoviedb.org"
IMAGE_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"

let list = document.querySelector('#trendings')
let titleList = document.querySelector('h1')

let trendining = new TrendingController();
trendining.setup()

function search(){
  list.innerHTML = ""
  let term = document.querySelector('#pesquisa').value;
  titleList.innerHTML = "Pesquisa: " + term
  let search = new SearchesController();
  search.setup()
}
function trending(){
  list.innerHTML = ""
  titleList.innerHTML = "Melhores da semana"
  let trending = new TrendingController();
  trending.setup()
}
function addToWatchlist(id){
  let watchlist = new WatchlistController()
  watchlist.addToWatchlist(id)
  trending()
}
function watchlist(){
  list.innerHTML = ""
  titleList.innerHTML = "Assistir depois"
  let watchlist = new WatchlistController();
  watchlist.getWatchlist()
}

function removeFromWatchlist(id){
  let watchlist = new WatchlistController()
  watchlist.removeFromWatchlist(id)
  trending()
}

function addToWatchedlist(id){
  let watchedlist = new WatchedlistController()
  watchedlist.addToWatchedlist(id)
  trending()
}
function watchedlist(){
  list.innerHTML = ""
  titleList.innerHTML = "Assistir depois"
  let watchedlist = new WatchedlistController();
  watchedlist.getWatchedlist()
}

function removeFromWatchedlist(id){
  let watchedlist = new WatchedlistController()
  watchedlist.removeFromWatchedlist(id)
  trending()
}