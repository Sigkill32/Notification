const generateContainer = (notificationId, containerId) => {
  const containerDomNode = document.createElement("div");
  let rand;
  if (notificationId) {
    rand = notificationId;
  } else {
    rand = Math.floor(Math.random() * 100000 + 1);
  }
  containerDomNode.setAttribute("id", `app-notification-${rand}`);
  if (containerId) {
    document.getElementById(containerId).appendChild(containerDomNode);
  } else {
    document.body.appendChild(containerDomNode);
  }
  return { containerDomNode, rand };
};

export default generateContainer;
