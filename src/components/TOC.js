import React, { Component } from 'react';

export default class TOC extends Component {
  render() {
    let lists = [];
    for (let i in this.props.data) {
      lists.push(
        <li>
          <a href={this.props.data[i].id}>{this.props.data[i].title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}
