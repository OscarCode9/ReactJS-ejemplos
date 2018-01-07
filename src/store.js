import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'REPLACE_POKEMONS':
      return action.pokemons
    
    case 'DELETE_POKEMONS' : {
      console.log(state)
      return state.filter(pokemon => pokemon.name !== action.pokemon )
      
    }
    case 'POKEMON_FAVORITE' : {
        return state.map(function(pokemon){
          console.log(pokemon);
          if(pokemon.name === action.pokemon.name){
            pokemon.favorite = !action.pokemon.favorite;
            return pokemon
          }else{
            return pokemon
          }
        })
      }
    case 'POKEMON_LIKE' : {
      return state.map(function(pokemon){
        if(pokemon.name === action.pokemon.name){
          if(pokemon.liked ){
            pokemon.liked = false;
            pokemon.likes = action.pokemon.likes - 1;
            return pokemon
          }else{
            pokemon.liked = true;
            pokemon.likes = action.pokemon.likes + 1;
            return pokemon
          }
          
        }else{
          return pokemon
        }
      })

    }
    
    
    default:
      return state;
  }
}


const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  return result;
}

export default createStore(combineReducers({pokemons}), applyMiddleware(logger, thunk));