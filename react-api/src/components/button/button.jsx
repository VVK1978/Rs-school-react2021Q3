import React from 'react';

export default function Btn(props) {
  const btnClick = (event) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach((el) => {
      if (el.id === event.target.id) {
        event.target.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
    props.pageResetAndChoose(event);
    //  props.chooseCategory(event);
  };

  return (
    <>
      <button
        className={props.data.classname}
        id={props.data.id}
        onClick={btnClick}
        data-btn={props.id}
      >
        {props.data.text}
      </button>
    </>
  );
}
