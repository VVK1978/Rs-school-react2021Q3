const removeChild = (content) => {
  console.log('remove child...');
  while (content?.firstChild) {
    content.removeChild(content.firstChild);
  }
};

export default removeChild;
