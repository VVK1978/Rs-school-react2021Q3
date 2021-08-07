const createElement = (tag, text) => {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
};

export default createElement;
