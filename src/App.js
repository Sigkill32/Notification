import React, { Component } from "react";
import Notify from "./components/Notify";
import notification from "./components/Notification";

class App extends Component {
  state = {};

  handleClick = () => {
    notification.success({
      title: "Title",
      description: "Some description",
      type: "message",
      onClick: this.clicked,
      onClose: this.closed
    });
  };

  clicked = id => {
    console.log(id, "clicked");
  };

  closed = id => {
    console.log("closed", id);
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
