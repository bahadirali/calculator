import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      calcText: '',
    };

    this.handleButtonInput = this.handleButtonInput.bind(this);
  }


  handleButtonInput(event, input){
    const currentCalcText = this.state.calcText;
    this.setState({
      calcText:  currentCalcText + input,
    });
  }

  render(){
    let numbers = [];
    for(let i=2; i>=0; i--){
      let cells = [];
      for(let j=1; j<=3; j++){
        cells.push(<td>
          <button onClick={(e) => {this.handleButtonInput(e, i*3 + j)}}>{i*3 + j}</button>
        </td>);
      }
      numbers.push(
        <tr>
          {cells}
        </tr>
      );
    }
    return (
      <div className="App">
        <table>
          <tr>
            <td>
              {this.state.calcText}
            </td>
          </tr>
          {numbers}
        </table>
      </div>
    );
  }
}
