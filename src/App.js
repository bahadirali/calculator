/* eslint no-eval: 0 */

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
    if(input === 'c'){
      if(currentScreenText.length > 0){
        this.setState({
          screenText: currentScreenText.substring(0, currentScreenText.length-1),
        });
      }
    }else if(input === '='){
      try {
        if(currentScreenText.length > 0){
          this.setState({
            screenText: eval(currentScreenText).toString(),
          });
        } 
      } catch (e) {
          if (e instanceof SyntaxError) {
            console.log(e.message);  
            //alert(e.message);
          }
      }
    }
    else{
      if(input == 'x') input = '*';
      this.setState({
        screenText:  currentScreenText + input,
      });
    }
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
      <tr key="first_row">
        <td colSpan="4">
          <button className="clear-button" onClick={this.clearScreen}>
            clear
          </button>
        </td>
      </tr>
    );

    for(let i=0; i<4; i++){
      let cells = [];
      for(let j=0; j<4; j++){
        cells.push(<td key={i * 4 + j} >
          <button
            className="calc-button"
            onClick={(e) => {this.handleButtonInput(e, buttonSymbols[i][j])}}>
              {buttonSymbols[i][j]}
          </button>
        </td>);
      }
      
      rows.push(
        <tr key={"row_"+ i}>
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
        <table 
          cellPadding="0"
          cellSpacing="0"
          border="0"
          className="calc-table">
          <tbody>
            <tr>
              <td colSpan="4">
                <div className="screen-outer-div">
                  <div className="screen-inner-div">
                    {this.state.screenText === '' ? '0' : this.state.screenText}
                  </div>
                </div>
              </td>
            </tr>
            {keyboard}
          </tbody>
        </table>
      </div>
    );
  }
}
