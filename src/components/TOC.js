import React, { Component } from 'react';

export default class TOC extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    for (let i in data) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={`/content/${data[i].id}`}
            // data-id={data[i].id}
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangePage(data[i].id - 1);
              // this.props.onChangePage(event.target.dataset.id - 1);
            }}
          >
            {data[i].title}
          </a>
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
