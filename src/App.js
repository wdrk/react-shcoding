import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: 'WEB',
        sub: 'World Wide Web!',
      },
      content: {
        title: 'HTML',
        desc: 'HTML is HyperText Markup Language.',
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC></TOC>
        <Content
          title={this.state.content.title}
          desc={this.state.content.desc}
        ></Content>
      </div>
    );
  }
}

export default App;
