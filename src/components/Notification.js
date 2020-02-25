import NotifySubCtrl from "./NotifySubCtrl";
import generateContainer from "./containerGenerator";

const notification = {
  success: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose
    );
    notifySubCtrl.success(containerDomNode, rand);
  },

  error: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose
    );
    notifySubCtrl.error(containerDomNode, rand);
  },

  info: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose
    );
    notifySubCtrl.info(containerDomNode, rand);
  },

  warn: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose
    );
    notifySubCtrl.warn(containerDomNode, rand);
  },

  openNotification: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose
    );
    notifySubCtrl.openNotification(containerDomNode, rand);
  },

  closeNotification: id => {
    const element = document.querySelector(`#app-notification-${id}`);
    if (element) element.parentNode.removeChild(element);
  }
};

export default notification;
