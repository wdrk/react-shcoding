import './App.css';
import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web!
      </header>
    );
  }
}
class App extends Component {
  render() {
    return <Subject></Subject>;
  }
}

export default App;
