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
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px',
    };
    return (
      <fragment>
        <div style={style}>안녕하세요!</div>
        <MyComponent value={this.state.counter} />
        <button onClick={this.handleClick}>Click Me</button>
      </fragment>
    );
  }
}

export default App;
