import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";
import App from "./App";

const Index = () => (
  <div className={styles.cb}>
    <App />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));
