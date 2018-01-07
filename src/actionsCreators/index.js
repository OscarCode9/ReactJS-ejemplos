const loadPokemons = () => {

  let pokemonsName;
  let allPokemons = [];

  return async dispatch => {
    let result = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let pokemons = await result.json();
    pokemonsName = pokemons;
    for (let pokemon of pokemonsName.results) {
      let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name);
      let pokemons = await result.json();
      pokemons.favorite = false;
      pokemons.likes = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      pokemons.liked = false;
      dispatch({
        type: "REPLACE_POKEMONS",
        pokemons: allPokemons
      })
      allPokemons = allPokemons.concat(pokemons);
      
    }
  }
};

const morePokemons = (allPokemons, next) => {
  let pokemonsName;
  return async dispatch => {
    console.log('Next and all', next);
    if(next === null){
      let results = await fetch('https://pokeapi.co/api/v2/pokemon/');
      let data = await results.json();
      next = data.next;
    }
    let result = await fetch(next);
    let pokemons = await result.json();
    console.log('URL', pokemons.next);
    pokemonsName = pokemons;
    for (let pokemon of pokemonsName.results) {
      let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name);
      let pokemons = await result.json();
      pokemons.favorite = false;
      pokemons.likes = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      pokemons.liked = false;
      dispatch({
        type: "REPLACE_POKEMONS",
        pokemons: allPokemons
      })
      allPokemons = allPokemons.concat(pokemons);
    }
    return pokemons.next;
  }
}

const deletePokemon = pokemon => {
  return {
    type: 'DELETE_POKEMONS',
    pokemon
  }
}

const pokemonFavorite = pokemon => {
  return {
    type: 'POKEMON_FAVORITE',
    pokemon
  }
}
const pokemonLike = pokemon => {
  return {
    type: 'POKEMON_LIKE',
    pokemon
  }
}



export { loadPokemons, deletePokemon, pokemonFavorite, morePokemons, pokemonLike }
