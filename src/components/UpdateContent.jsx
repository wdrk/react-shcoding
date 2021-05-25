import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={e => {
            e.preventDefault(); /* form의 action이 가리키는 페이지로 화면을 이동하지 않도록 */
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }}
        >
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            />
          </p>
          <p>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="2"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
