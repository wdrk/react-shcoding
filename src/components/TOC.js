import React, { Component } from 'react';

export default class TOC extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    for (let i in data) {
      lists.push(
        <li>
          <a href={data[i].id}>{data[i].title}</a>
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
