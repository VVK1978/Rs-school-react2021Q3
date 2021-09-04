export default function pagesCreator(totalPages, currentPage) {
  let pages = [];
  if (totalPages < 11) {
    pages = Array(totalPages)
      .fill()
      .map((item, ind) => ind + 1);
  } else if (currentPage > 5) {
    for (let i = currentPage - 4; i <= currentPage + 5; i += 1) {
      pages.push(i);
      if (totalPages === i) break;
    }
  } else {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
      if (totalPages === i) break;
    }
  }
  return pages;
}
