class Remove {
  constructor(localName, localMovies, id){
    for (let i = 0; i < localMovies.length; i++) {
      if (localMovies[i] == id) {
        localMovies.splice(i, 1)
      }
    }
    localStorage.setItem(localName, JSON.stringify(localMovies))
  }
}