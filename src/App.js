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
      // width: 400
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>Hello world</h1>
        {/* <Notify
          description='This is the content of the notification. This is the content of the notification. This is the content of the notification.'
          title='Notification Title'
          type='notification'
          subType='success'
          width={400}
        /> */}
        <button onClick={this.handleClick}>open</button>
      </div>
    );
  }
}

export default App;
