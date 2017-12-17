import React from 'react';
import InputItem from '../items/InputItem';
import ResultsBox from './ResultsBox';

class InputBox extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      buttonTitle: 'Agregar',
      outPut: '',
      items: []
    }
  }
  async onClick(e){
    if(this.state.buttonTitle === "Agregar"){
      this.setState({buttonTitle: 'No agregar'});
    }else if(this.state.buttonTitle === "No agregar"){
      this.setState({buttonTitle: 'Agregar'});
    }
    
    if(this.refs.inputTask.getValue()===""){
      this.setState({
        outPut: 'No puedes dejar el campo vacio'
      });
    }else{
      console.log(this.refs.inputTask.getValue());
      this.setState({
        buttonTitle: this.refs.inputTask.getValue(),
        outPut: 'Listo!',
        items: this.state.items.concat(this.refs.inputTask.getValue())
      }, function(){
        console.log(this.state.items)
      })
    }

  }

  render() {
    return ( 
      <div>
      <div className = "row" >
        <InputItem ref="inputTask"/>
        <div className="col-md-4 text-center">
          <button className="btn btn-primary center-block" id="buttoId" type="button" onClick={this.onClick}>{this.state.buttonTitle}</button>
        </div>
        <label >{this.state.outPut}</label>
      </div>
      <ResultsBox items={this.state.items}/>
      </div>
      
    )
  }


}
export default InputBox;