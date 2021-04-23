import React, { Component } from 'react';

export default class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
    };
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/createProcess"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.onSubmit(
              event.target.title.value,
              event.target.desc.value
            );
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={function (event) {
                this.setState({ title: event.target.value });
              }.bind(this)}
            ></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
