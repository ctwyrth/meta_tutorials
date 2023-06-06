import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;