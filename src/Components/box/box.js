import React from 'react';
import InputBox from './InputBox';
import ResultsBox from './ResultsBox';


class Box extends React.Component {

  render() {
    return ( 
      <div className = "container" >
        <InputBox/>
      </div>
    )
  }


}
export default Box;