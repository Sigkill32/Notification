import React, { Component } from "react";
import notification from "./components/Notification";

class App extends Component {
  state = {};

  handleClick = () => {
    notification.openNotification({
      title: "Title",
      description: "Some description",
      type: "notification",
      position: "topRight",
      onNotificationClose: this.handleClose,
      onNotificationClick: this.handleNotClick
    });
  };

  handleClose = () => {
    console.log("closed");
  };

  handleNotClick = id => {
    console.log(id);
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
