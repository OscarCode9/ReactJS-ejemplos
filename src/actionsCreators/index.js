const loadPokemons =  () => {

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
      dispatch({
        type: "REPLACE_POKEMONS",
        pokemons: allPokemons
      })
      allPokemons = allPokemons.concat(pokemons);
    }
  }
};

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



export {loadPokemons, deletePokemon, pokemonFavorite}
