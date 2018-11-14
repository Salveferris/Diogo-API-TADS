class TrendingController {
  constructor(){
    this._view = new MoviesCardView
  }

  setup() {
    let self = this
    var httpCliente = new XMLHttpRequest();
    httpCliente.open('GET', BASE_URL + '/3/trending/movie/week?api_key=' + API_KEY)
    httpCliente.onreadystatechange = function() {
        if(httpCliente.readyState == 4){
          var resposta = JSON.parse(httpCliente.responseText).results;
          self._view.render(resposta)
        }
    }
    httpCliente.send();
  }
}