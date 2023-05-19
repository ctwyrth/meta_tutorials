import React from 'react';

function Main(props) {
  return (
    <main>
      <h2>Hello, {props.userName}</h2>
      <p>You are in position no. {props.num}</p>
    </main>
  );
};

export default Main;