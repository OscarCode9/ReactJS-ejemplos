import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'REPLACE_POKEMONS':
      return action.pokemons
      break;
    
    case 'DELETE_POKEMONS': {
      console.log(state)
      return state.filter(pokemon => pokemon.name !== action.pokemon )
      
    }
    default:
      return state;
      break;
  }
}

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  return result;
}

export default createStore(combineReducers({pokemons}), applyMiddleware(logger, thunk));