import React from 'react';
import ResultItem from '../items/ResultItem';

class ResultsBox extends React.Component {
  render() {
    console.log(this.props.items)
    return (
      <div className="row" >
        <ul className="list-unstyled">
        {this.props.items.map(function(currentValue, index, array){
          let name =`♥ ${currentValue}`
          return (
            <ResultItem name={name} key={index}/>
          )
        })
        }
        </ul>
      </div>
    )
  }


}
export default ResultsBox;