<<<<<<< HEAD
import React from 'react';

class InputItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:'Kristo' }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      value: e.target.value
    })
    
  }
  getValue(){
    return this.state.value
  }
  render() {
    return ( 
    <input 
      type = "text"
      onChange={this.onChange} 
      value={this.state.value}
      className="form-control"/>
    )
  }
}
  
=======
import React from 'react';

class InputItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:'Kristo' }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      value: e.target.value
    })
    
  }
  getValue(){
    return this.state.value
  }
  render() {
    return ( 
    <input 
      type = "text"
      onChange={this.onChange} 
      value={this.state.value}
      className="form-control"/>
    )
  }
}
  
>>>>>>> 9b41f5d2ca39b0801908d6ce713960501cf8376f
export default InputItem;