const removeChild = (content) => {
  while (content?.firstChild) {
    content.removeChild(content.firstChild);
  }
};

export default removeChild;
