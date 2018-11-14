class SearchesController {
  constructor(){
    this._view = new MoviesCardView
    this.term = document.querySelector('#pesquisa').value;
  }

  setup() {
    let self = this
    var httpCliente = new XMLHttpRequest();
    httpCliente.open('GET', BASE_URL + '/3/search/movie?api_key=' + API_KEY + '&query=' + self.term)
    httpCliente.onreadystatechange = function() {
        if(httpCliente.readyState == 4){
          var resposta = JSON.parse(httpCliente.responseText).results;
          self._view.render(resposta)
        }
    }
    httpCliente.send();
  }
}