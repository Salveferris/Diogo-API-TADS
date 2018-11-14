class Create {
  constructor(localName, localMovies, id){
    if (localMovies === null) {
      localMovies = []
      localMovies.push(id)
    } else {
      localMovies.push(id)
    }
    let uniqIds = []
    for (let i = 0; i < localMovies.length; i++) {
      if (uniqIds.indexOf(localMovies[i]) == -1) {
        uniqIds.push(localMovies[i])
      }
    }
    localStorage.setItem(localName, JSON.stringify(uniqIds))
  }
}