import React from 'react';
import "./App.css";

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results=1")
//       .then(response => response.json())
//       .then(data => setUser(data.results)
//       );
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return user.length > 0 ? (
//     <div>
//       <h1>Data returned</h1>
//       <h2>First name: {user[0].name.first}</h2>
//       <h2>Last name: {user[0].name.last}</h2>
//       <img src={user[0].picture.large} alt="" />
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   )
// }

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first} {user.results[0].name.last}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;