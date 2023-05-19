import './App.css';
import Header from './components/props-example/Header';
import Main from './components/props-example/Main';
import Sidebar from './components/props-example/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Main userName="Nick" num={5} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
