import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

//传入一个参数，返回一个函数，高阶函数
/* .filter(isSearched(pattern)) */
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
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

          {list.map(item => {
            return (
              <tr key={item.objectID} className="text-center">
                <td style={{ width: "30%" }}>
                  <a href={item.url}>{item.title}</a>
                </td>
                <td>{item.author}</td>
                <td>{item.num_comments}</td>
                <td>{item.points}</td>
                <td>
                  <button
                    onClick={() => onDismiss(item.objectID)}
                    type="button"
                  >
                    删除此行
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
