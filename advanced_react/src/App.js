import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (score <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    console.log("Form submitted!");
    setComment("");
    setScore(10);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form:</h2>
          <div className="field">
            <label>Score: {score} ⭐️</label>
            <input
              type="range"
              name="score"
              id="score"
              min={0}
              max={10}
              step={1}
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Comment:</label>
            <textarea
              name="comment"
              id="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;