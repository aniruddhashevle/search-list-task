import React, { Component } from 'react';
import SearchSelectParty from './components/SearchSelectParty';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchSelectParty />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
