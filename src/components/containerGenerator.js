const generateContainer = (notificationId, containerId, position) => {
  const containerDomNode = document.createElement("div");
  let rand;
  if (notificationId) {
    rand = notificationId;
  } else {
    rand = Math.floor(Math.random() * 100000 + 1);
  }
  containerDomNode.setAttribute("id", `app-notification-${rand}`);

  switch (position) {
    case "topLeft":
      containerDomNode.setAttribute(
        "style",
        "left: 20px;top:20px;position: absolute;animation: slideRight 200ms;"
      );
      break;
    case "topRight":
      containerDomNode.setAttribute(
        "style",
        "top: 20px;right: 20px;position: absolute;animation: slideLeft 200ms;"
      );
      break;
    case "bottomLeft":
      containerDomNode.setAttribute(
        "style",
        "left: 20px;bottom:20px;position: absolute;animation: slideLeft 200ms;"
      );
      break;
    case "bottomRight":
      containerDomNode.setAttribute(
        "style",
        "right: 20px;bottom:20px;position: absolute;animation slideLeft 200ms;"
      );
      break;
    default:
      containerDomNode.setAttribute(
        "style",
        "left: 20px;top:20px;position: absolute;animation: slideRight 200ms;"
      );
  }

  // containerDomNode.setAttribute("style", "left: 0;position: absolute");
  if (containerId) {
    document.getElementById(containerId).appendChild(containerDomNode);
  } else {
    document.body.appendChild(containerDomNode);
  }
  return { containerDomNode, rand };
};

export default generateContainer;
