import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
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
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.toc[0].title;
      _desc = this.state.toc[0].desc;
    }

    return (
      <div className="App">
        <header>
          <h1>
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                this.setState({
                  mode: 'welcome',
                });
              }}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.toc}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
