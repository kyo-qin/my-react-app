import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Vue",
    url: "https://facebook.github.io/vue/",
    author: "Qqqq Walke",
    num_comments: 4,
    points: 46,
    objectID: 1
  }
];

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail3"
            placeholder="Email"
            onChange={(e)=>console.log(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputPassword3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword3"
            placeholder="Password"
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">
          Sign in
        </button>
      </form>
    );
  }
}

export default Form1;
