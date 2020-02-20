import React from "react";
import { render } from "react-dom";
import Notify from "./Notify";

class NotifySubCtrl {
  constructor(
    title,
    description,
    type,
    className,
    width,
    position,
    notificationId
  ) {
    this.title = title;
    this.description = description;
    this.type = type;
    this.className = className;
    this.width = width;
    this.position = position;
    this.notificationId = notificationId;
  }

  error = (containerDomNode, rand) => {
    this.renderNotification("error", containerDomNode, rand);
  };

  success = (containerDomNode, rand) => {
    this.renderNotification("success", containerDomNode, rand);
  };

  warn = (containerDomNode, rand) => {
    this.renderNotification("warn", containerDomNode, rand);
  };

  info = (containerDomNode, rand) => {
    this.renderNotification("info", containerDomNode, rand);
  };

  renderNotification = (subType, containerDomNode, rand) => {
    render(
      <Notify
        subType={subType}
        title={this.title}
        description={this.description}
        type={this.type}
        className={this.className}
        width={this.width}
        position={this.position}
        id={rand}
      />,
      containerDomNode
    );
  };
}

export default NotifySubCtrl;
