import React, { Component } from "react";
import close from "../icons/close.svg";

class Notify extends Component {
  state = {};

  renderNotificationIcon = () => {
    const { subType } = this.props;
    const subTypes = ["error", "info", "success", "warn"];
    if (subTypes.includes(subType)) {
      return (
        <div className='notification-icon'>
          <img src={require(`../icons/${subType}.svg`)} alt={subType} />
        </div>
      );
    } else return null;
  };

  setPosition = () => {
    const { position } = this.props;

    switch (position) {
      case "topLeft":
        return { top: "20px", left: "20px" };
      case "topRight":
        return { top: "20px", right: "20px" };
      case "bottomLeft":
        return { bottom: "20px", left: "20px" };
      case "bottomRight":
        return { bottom: "20px", right: "20px" };
      default:
        return { top: "20px", left: "20px" };
    }
  };

  renderTitle = () => {
    const { type, title } = this.props;
    if (type === "notification") {
      if (typeof title === "string")
        return <div className='notification-title'>{title}</div>;
      else return title;
    }
    if (type === "message") return null;
  };

  handleClose = e => {
    const { onClose } = this.props;
    const { id } = e.target;
    this.UnMountNotification(id);
    // onClose();
  };

  handleClick = () => {
    const { onClick } = this.props;
    // onClick();
  };

  UnMountNotification = id => {
    const element = document.querySelector(`#app-notification-${id}`);
    if (element) element.parentNode.removeChild(element);
  };

  render() {
    const { description, type, closeIcon, width, id, className } = this.props;
    return (
      <div
        className={`notification-container${className ? " " + className : ""}`}
        style={{ width: `${width}px`, ...this.setPosition() }}
        onClick={this.handleClick}
        id={id}
      >
        {this.renderNotificationIcon()}
        <div className='notification'>
          {this.renderTitle()}
          {typeof description === "string" ? (
            <div className='notification-desc'>{description}</div>
          ) : (
            description
          )}
        </div>
        {type === "notification" && (
          <button
            className='close-notification'
            onClick={this.handleClose}
            id={id}
          >
            <img src={closeIcon ? closeIcon : close} alt='close' id={id} />
          </button>
        )}
      </div>
    );
  }
}

export default Notify;
