import React from 'react';
import { connect } from 'react-redux';
import { deletePokemon, pokemonFavorite, morePokemons } from '../../actionsCreators';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const buttonStyle = {
    width: '100%',
    height: '50px',
    textAlign: 'center',
    background: 'black',
    border: 'yellow',
    borderRadius: '10px',
    color: 'white'
  }


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: '',
      isFavorite: true,
      next: null,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.borrar = this.borrar.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState((prevState)=>({
      isFavorite: !prevState.isFavorite
    }));

  }


  componentWillMount() {
    Modal.setAppElement('body');
 }

  openModal(name) {
    this.setState({ modalIsOpen: true, name: name });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  borrar(){


  }

  render() {


    if (this.props.pokemons.length > 0) {
      
      return (



        <div className="container">

          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              
              <div>¿Seguro quiere borrar este pokemon?</div>
                <input />
                <button onClick={this.closeModal}>Cancelar</button>
                <button onClick={()=> {
                  this.props.deletePokemon(this.state.name);
                  this.setState({
                    name: ''
                  });
                  this.closeModal();
                }
                }>Aceptar</button>
            </Modal>
            
          </div>

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
                    <div>

                    { pokemon.favorite ? <i onClick ={()=>{
                      this.props.pokemonFavorite(pokemon)
                    }} className="fa fa-star fa-2x" aria-hidden="true"></i>  : <i onClick ={()=>{this.props.pokemonFavorite(pokemon)}} className="fa fa-star-o fa-2x" aria-hidden="true"></i>}
                   
                    <i style={{ cursor: 'pointer' }} className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={() => {this.openModal(pokemon.name)}} ></i>
                    </div>
                    

                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <button width="100%"  style = {buttonStyle} onClick = { async ()=>{
            const next = await this.props.morePokemons(this.props.pokemons, this.state.next);
            console.log('Que pedo con esta url', next);
            this.setState({
              next: next
            });

          }}>Cargar mas Pokemones</button>
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
  return bindActionCreators({ deletePokemon, pokemonFavorite, morePokemons }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
