import './App.css';
import React, { Component } from 'react';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selectedContentId: 2,
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
  getReadContent() {
    return (
      <ReadContent
        id={this.state.toc[this.state.selectedContentId].id}
        title={this.state.toc[this.state.selectedContentId].title}
        desc={this.state.toc[this.state.selectedContentId].desc}
      ></ReadContent>
    );
  }

  getContent() {
    let _article = null;
    if (this.state.mode === 'welcome') {
      _article = (
        <ReadContent
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
        ></ReadContent>
      );
    } else if (this.state.mode === 'read') {
      _article = this.getReadContent();
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            this.setState({
              toc: this.state.toc.concat({
                id: this.state.toc.length + 1,
                title: _title,
                desc: _desc,
              }),
              mode: 'read',
            });
          }}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      _article = (
        <UpdateContent
          data={this.getReadContent().props}
          onSubmit={(_id, _title, _desc) => {
            const _toc = Array.from(this.state.toc);
            _toc[_id - 1] = {
              id: _id,
              title: _title,
              desc: _desc,
            };
            this.setState({
              toc: _toc,
              mode: 'read',
            });
          }}
        ></UpdateContent>
      );
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() =>
            this.setState({
              mode: 'welcome',
            })
          }
        ></Subject>
        <TOC
          onChangePage={(id) => {
            this.setState({
              mode: 'read',
              selectedContentId: id,
            });
          }}
          data={this.state.toc}
        ></TOC>
        <Control
          onChangeMode={(controlMode) => {
            this.setState({
              mode: controlMode,
            });
          }}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
