import './App.css';
import React, { Component } from 'react';
import MyComponent from './myComponent';

class App extends Component {
  state = {
    counter: 1,
  };
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <MyComponent value={this.state.counter} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
