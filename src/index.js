import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./redux_example/App.js";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import headerReducer from "./redux_example/routes/header/reducer";
import sideReducer from "./redux_example/routes/side/reducer";

//ReactDOM.render(<App/>, document.getElementById('root'));

const reducers = combineReducers({
  header: headerReducer,
  side: sideReducer
});
// 创建store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
