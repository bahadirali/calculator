import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      screenText: '',
    };

    this.handleButtonInput = this.handleButtonInput.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }


  handleButtonInput(event, input){
    const currentScreenText = this.state.screenText;
    this.setState({
      screenText:  currentScreenText + input,
    });
  }

  clearScreen(event){
    this.setState({
      screenText: '',
    });

  }

  render(){

    let keyboard = [];
    let rows = [];
    const buttonSymbols = [
                            ['7','8','9','-'],
                            ['4','5','6','+'],
                            ['1','2','3','x'],
                            ['0','c','=','/'],
                          ];

    rows.push(
      <tr>
        <td colSpan="4">
          <button onClick={this.clearScreen}>
            clear
          </button>
        </td>
      </tr>
    );

    for(let i=0; i<4; i++){
      let cells = [];
      for(let j=0; j<4; j++){
        cells.push(<td>
          <button onClick={(e) => {this.handleButtonInput(e, buttonSymbols[i][j])}}>
            {buttonSymbols[i][j]}
          </button>
        </td>);
      }
      
      rows.push(
        <tr>
          {cells}
        </tr>
      );
    }

    /*
    keyboard.push(
        {rows}
    );
    */
   keyboard = rows;

    return (
      <div className="App">
        <table>
          <tr>
            <td colSpan="4">
              {this.state.screenText}
            </td>
          </tr>
          {keyboard}
        </table>
      </div>
    );
  }
}
