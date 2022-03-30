export default function outsideClick(element, callback) {
  const getHtml = document.documentElement;
  const attribute = 'data-outside';
  const events = ['click', 'touchstart'];

  function offElement(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(attribute);
      events.forEach((evento) => {
        getHtml.removeEventListener(evento, offElement);
      });
      callback();
    }
  }

  if (!element.hasAttribute(attribute)) {
    element.setAttribute(attribute, '');
    events.forEach((evento) => {
      getHtml.addEventListener(evento, offElement);
    });
  }
}
