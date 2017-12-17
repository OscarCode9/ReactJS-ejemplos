import React from 'react';
import logo from './logo.svg';
import './App.css';
function Tick (props){
  
  const element = (
    <div>
      <h1>Hello, world and  {props.name}</h1>
      <h2>IT is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  return element;
}

class Welcome extends React.Component {
  render(){
    return <h1> Hello, {this.props.name}</h1>
  }
}


const element = <Welcome name = "Gabriela"/>;

function Appi(){
  return (
    <div>
      <Welcome name = "Sara"/>
      <Welcome name = "Cahal"/>
      <Welcome name = "Edite"/>
      {element}
    </div>
  );
}

function Avatar(props){
  return(
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
};


let author_ = {
  avatarUrl: 'https://78.media.tumblr.com/ac597c85dd78ccc9052b4fc06cc42756/tumblr_neuqe7TzeF1r3ntg2o1_500.jpg',
  name: 'Oscar Martinez'
}

function Comment(props){
  const element =(
    <div>
      <Avatar author ={author_}/>
      <p>{props.text}</p>
    </div>
  );
  return element;
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { date: new Date(),
    counter: 0}
    console.log(props)

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    //Correct form
    this.setState(function(prevState, props){
      console.log(props)
      return{
        date:new Date(),
        counter: prevState.counter + props.increment
      }
    })
  }

  render(){
    return(
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()} | {this.state.counter}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React with boostrap ccs</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tick name="Oscar"/>
        <Appi/>
        <Comment text="JavasScript es el lenguaje de programación usado en el front-end y back-end"/>
        <Clock increment ={5} />
      </div>
    );
  }
}

export default App;
