import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: 'read',
      welcome: {
        title: 'Welcome',
        desc: 'Hello, React!',
      },
      subject: {
        title: 'WEB',
        sub: 'World Wide Web!',
      },
      toc: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
      content: {
        title: 'HTML',
        desc: 'HTML is HyperText Markup Language.',
      },
    };
  }
  render() {
    let _title = null;
    let _desc = null;
    if (this.state.mod === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mod === 'read') {
      _title = this.state.toc[0].title;
      _desc = this.state.toc[0].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC data={this.state.toc}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
