import React from 'react';

function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is on!</h1>;
  const lightMode = <h1>Light Mode is on!</h1>;

  const handleClick = () => {
    darkModeOn = !darkModeOn;
    console.log(darkModeOn == true ? "Dark mode is on" : "Light mode is on");
  }

  return (
    <div className={darkModeOn ? "dark" : "light"}>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ModeToggler;