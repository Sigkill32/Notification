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
      containerId
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      position
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
      containerId
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      position
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
      containerId
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      position
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
      containerId
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      position
    );
    notifySubCtrl.warn(containerDomNode, rand);
  }
};

export default notification;
