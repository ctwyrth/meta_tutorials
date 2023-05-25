import './App.css';
// import Btn from './components/event_handling/Btn';
// import ModeToggler from './components/event_handling/ModeToggler';
// import Child from './components/parent-child-data/Child';
// import InputComponent from './components/hooks/InputComponent';
// import RegistrationForm from './components/hooks/RegistrationForm';
import TextInputWithFocusButton from './components/hooks/TextInputWithFocusButton';

function App() {
  const date = new Date();

  return (
    <div>
      {/* <Child message={date.toLocaleTimeString() + " on " + date.toLocaleDateString()} /> */}
      {/* <InputComponent /> */}
      {/* <RegistrationForm /> */}
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
