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

export {loadPokemons, deletePokemon}
