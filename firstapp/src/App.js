import './App.css';
import avatar from './assets/avatar.png';

function Logo(props) {
  const userPic = <img src={avatar} alt="user profile pic" width={props.width} />
  return userPic;
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Logo width="150px" />
    </div>
  );
}

export default App;
