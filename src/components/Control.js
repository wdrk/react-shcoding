import React, { Component } from 'react';

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('create');
            }}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('update');
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('delete');
            }}
            type="button"
            value="delete"
          ></input>
        </li>
      </ul>
    );
  }
}
