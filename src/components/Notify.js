import React from "react";
import close from "../icons/close.svg";

const Notify = ({
  description,
  type,
  closeIcon,
  width,
  id,
  className,
  onNotificationClick,
  onNotificationClose,
  title,
  subType
}) => {
  const renderNotificationIcon = () => {
    const subTypes = ["error", "info", "success", "warn"];
    if (subTypes.includes(subType)) {
      const src = require(`../icons/${subType}.svg`);
      return (
        <div className='notification-icon'>
          <img src={src} alt={subType} />
        </div>
      );
    } else return null;
  };

  const renderTitle = () => {
    if (type === "notification") {
      if (typeof title === "string")
        return <div className='notification-title'>{title}</div>;
      else return title;
    }
    if (type === "message") return null;
  };

  const handleClose = e => {
    const { id } = e.target;
    UnMountNotification(id);
    onNotificationClose(id);
  };

  const handleClick = () => {
    onNotificationClick(id);
  };

  const UnMountNotification = id => {
    const element = document.querySelector(`#app-notification-${id}`);
    if (element) element.parentNode.removeChild(element);
  };

  return (
    <div
      className={`notification-container${className ? " " + className : ""}`}
      style={{ width: `${width}px` }}
      id={id}
    >
      <div className='notification' onClick={handleClick}>
        {renderNotificationIcon()}
        <div className='notification-title-desc'>
          {renderTitle()}
          {typeof description === "string" ? (
            <div className='notification-desc'>{description}</div>
          ) : (
            description
          )}
        </div>
      </div>
      <button className='close-notification' onClick={handleClose} id={id}>
        <img src={closeIcon ? closeIcon : close} alt='close' id={id} />
      </button>
    </div>
  );
};

export default Notify;
