import React from 'react';
import { connect } from 'react-redux';
import {deletePokemon} from '../../actionsCreators';
import {bindActionCreators} from 'redux'
class Home extends React.Component {
  render() {
    if (this.props.pokemons.length > 3) {
      return (
        <div className="container">
          <div className="row">
            {this.props.pokemons.map((pokemon, index) => (
                <div className="col s12 m6 l4" key={index}>
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name} />
                    </div>
                    <div className="card-content">
                      <h5>Pokemon name: <strong>{pokemon.name}</strong> </h5>
                      <p>Abilities:</p> {pokemon
                        .abilities
                        .map((abilities, index) => (
                          <p key={index}>{abilities.ability.name}</p>
                        ))
                      }
                      <button onClick={() => this.props.deletePokemon(pokemon.name)}>Borrar</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )
    } else {
      return (
        <div className='container '>
          <div className="progress black">
            <div className="indeterminate"></div>
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  console.log('State async');
  console.log(state.pokemons)
  return {
    pokemons: state.pokemons
  };
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({deletePokemon}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
