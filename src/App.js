import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">Basketball Squares</header>
        <div className="flex-h">
          <GameBoard />
        </div>
      </div>
    );

  }
  
  
}

export default App;
