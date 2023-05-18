import './App.css';
import Header from './components/props-example/Header';
import Main from './components/props-example/Main';
import Sidebar from './components/props-example/Sidebar';

function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
