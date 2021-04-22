import React, { Component } from 'react';

export default class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangePage();
            }}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}
