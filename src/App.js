import React, { Component } from 'react';
import Counter from './Counter.js';

class App extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return <div>에러가 났어요</div>;
    }
    return <Counter></Counter>;
  }
}

export default App;
