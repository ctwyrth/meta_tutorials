import React, { useState } from 'react';

export default function InputComponent() {
  const [inputText, setInputText] = useState('hello');

  const handleChange = (e) => { setInputText(e.target.value) };

  return (
    <div>
      <input type="text" name="userInput" id="userInput" value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setInputText('hello')}>Reset</button>
    </div>
  )
}
