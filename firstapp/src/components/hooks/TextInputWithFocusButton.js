import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>Focus the input!</button>
    </>
  )
}

export default TextInputWithFocusButton;