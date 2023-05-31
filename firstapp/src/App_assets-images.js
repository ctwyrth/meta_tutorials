import React from 'react';
import './App.css';

import rooftops from './assets/central_park_above.jpg';

function App() {
  const randomImageUrl = "https://picsum.photos/400/265";

  return (
    <div className="App">
      <h1>Task: add three images with some styling</h1>
      <img src={rooftops} alt="central park from overhead" height={200} />
      <img src={require("./assets/central_park_above.jpg")} alt="central park from overhead" height={200} />
      <img src={randomImageUrl} alt="random" height={200} />
    </div>
  );
}

export default App;
