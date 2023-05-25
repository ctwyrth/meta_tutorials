import React from 'react';

// function Btn() {
//   const clickHandler = () => console.log('clicked');

//   return (
//     <button onClick={clickHandler}>Click Me!</button>
//   )
// }

// export default Btn;

function Btn() {
  const clickHandler = () => console.log('clicked');
  const mouseOverHandler = () => console.log('mouseover');
  
  return (
    <button onMouseOver={mouseOverHandler} onClick={clickHandler}>Click Me!</button>
  )
}

export default Btn;