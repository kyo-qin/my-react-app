import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Search(props) {
  const { value, onChange, children } = props;
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

export default Search;
