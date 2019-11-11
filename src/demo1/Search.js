import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Search(props) {
  const { value, onChange, onSubmit, children } = props;
  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group">
        <label className="sr-only" htmlFor="exampleInputEmail3">
          Email address
        </label>
        {children}
        <input
          //type="email"
          className="form-control"
          id="exampleInputEmail3"
          placeholder="搜索"
          value={value}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-default">
        {children}
      </button>
    </form>
  );
}

export default Search;
