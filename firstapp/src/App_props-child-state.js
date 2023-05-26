import React, { useState } from 'react';
import './App.css';
// import Btn from './components/event_handling/Btn';
// import ModeToggler from './components/event_handling/ModeToggler';
// import Child from './components/parent-child-data/Child';
// import InputComponent from './components/hooks/InputComponent';
// import RegistrationForm from './components/hooks/RegistrationForm';
// import TextInputWithFocusButton from './components/hooks/TextInputWithFocusButton';
import Fruits from './components/state-lab/Fruits';
import FruitsCounter from './components/state-lab/FruitsCounter';

function App() {
  // const date = new Date();
  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'orange', id: 2 },
    { fruitName: 'plum', id: 3 },
  ])

  return (
    <div>
      {/* <Child message={date.toLocaleTimeString() + " on " + date.toLocaleDateString()} /> */}
      {/* <InputComponent /> */}
      {/* <RegistrationForm /> */}
      {/* <TextInputWithFocusButton /> */}
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
