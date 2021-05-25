import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC.jsx";
import ReadContent from "./components/ReadContent.jsx";
import CreateContent from "./components/CreateContent.jsx";
import UpdateContent from "./components/UpdateContent.jsx";
import Subject from "./components/Subject.jsx";
import Control from "./components/Control.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id: 2,
      subject: {
        title: "WEB",
        sub: "World Wide Web!",
      },
      welcome: {
        title: "Welcome",
        desc: "Hello, React!",
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      const data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }
  getContent() {
    let _title = null;
    let _desc = null;
    let _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      const _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            this.max_content_id++;
            const _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(_id, _title, _desc) => {
            const _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = {
                  id: _id,
                  title: _title,
                  desc: _desc,
                };
                break;
              }
              i++;
            }
            this.setState({
              contents: _contents,
              mode: "read",
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
          onChangePage={() => {
            this.setState({
              mode: "welcome",
            });
          }}
        ></Subject>
        <TOC
          onChangePage={id => {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={mode => {
            this.setState({
              mode,
            });
          }}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
