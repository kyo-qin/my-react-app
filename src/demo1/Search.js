import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail3">
            Email address
          </label>
          {children}
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail3"
            placeholder="搜索"
            value={value}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-default">
          Sign in
        </button>
      </form>
    );
  }
}

export default Search;
