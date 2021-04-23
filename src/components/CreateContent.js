import React, { Component } from 'react';

export default class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
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
            <input type="text" name="title" placeholder="title"></input>
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
