import './App.css';
import React, { Component } from 'react';
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
  render() {
    let _title = null;
    let _desc = null;
    let _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _title = this.state.toc[this.state.selectedContentId].title;
      _desc = this.state.toc[this.state.selectedContentId].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
            });
          }}
        ></CreateContent>
      );
    }
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
        {_article}
      </div>
    );
  }
}

export default App;
