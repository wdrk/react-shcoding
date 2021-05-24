import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC.jsx";
import Content from "./components/Content.jsx";
import Subject from "./components/Subject.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
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
  render() {
    let _title = null;
    let _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        const data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
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
        <ul>
          <li>
            <a href="">create</a>
          </li>
          <li>
            <a href="">update</a>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
