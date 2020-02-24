import React, { Component } from "react";
import Notify from "./components/Notify";
import notification from "./components/Notification";

class App extends Component {
  state = {};

  handleClick = () => {
    notification.success({
      title: "Title",
      description: "Some description",
      type: "notification"
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <button onClick={this.handleClick}>open</button>
      </div>
    );
  }
}

export default App;
