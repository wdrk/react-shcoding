import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={e => {
            e.preventDefault(); /* form의 action이 가리키는 페이지로 화면을 이동하지 않도록 */
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="2"
              placeholder="description"
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

export default CreateContent;
