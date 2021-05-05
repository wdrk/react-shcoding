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
        {/* JSX 내부에서 주석을 쓰려면 멀티라인 주석을 중괄호로 감싸면 된다*/}
        <h1
          something="dsalfkjdf" // 컴포넌트 안에 이렇게 주석을 쓸 수 있다
        >
          리액트
        </h1>
      </div>
    );
  }
}

export default App;
