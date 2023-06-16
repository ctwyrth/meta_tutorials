import React, { useRef } from 'react';
import "./App.css";

function App() {
  const formInputRef = useRef(null);
  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>Using useRef to access the underlying DOM</h1>
      <input type="text" name="formInput" id="formInput" ref={formInputRef} />
      <button onClick={focusInput}>Focus input</button>
      <p>{formInputRef.current.value}</p>
    </>
  )
}

export default App;