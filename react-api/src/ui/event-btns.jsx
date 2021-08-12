export default function EventBtns(event) {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((el) => {
    if (el.id === event.target.id) {
      event.target.classList.toggle('active');
    } else {
      el.classList.remove('active');
    }
  });
}
