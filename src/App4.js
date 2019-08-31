import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
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
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

//传入一个参数，返回一个函数，高阶函数
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const updatedItemList = this.state.list.filter(item => {
      return item.objectID !== id;
    });
    this.setState({ list: updatedItemList });
  }

  onSearchChange(e) {
    const { value } = e.target;
    this.setState({
      searchTerm: value
    });
  }

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="container">
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
              value={searchTerm}
              onChange={this.onSearchChange}
            />
          </div>
          <button type="submit" className="btn btn-default">
            Sign in
          </button>
        </form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">Url</th>
              <th className="text-center">姓名</th>
              <th className="text-center">评论数</th>
              <th className="text-center">得分</th>
              <th className="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            {list.filter(isSearched(searchTerm)).map(item => {
              return (
                <tr key={item.objectID} className="text-center">
                  <td>
                    <a href={item.url}>{item.title}</a>
                  </td>
                  <td>{item.author}</td>
                  <td>{item.num_comments}</td>
                  <td>{item.points}</td>
                  <td>
                    <button
                      onClick={() => this.onDismiss(item.objectID)}
                      type="button"
                    >
                      Dismiss
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App4;
