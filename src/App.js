import './App.css';
import React, { Component } from 'react';
import MyComponent from './myComponent';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <div>
        <h1>안녕하세요 리액트</h1>
        <MyComponent value={5} />
      </div>
    );
  }
}

export default App;
