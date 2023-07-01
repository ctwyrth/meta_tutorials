import React from 'react';
import './App.css';
// import FeedbackForm from './FeedbackForm';

// function App() {
//   const handleSubmit = () => {
//     console.log("Form submitted!");
//   }

//   return (
//     <div className="App">
//       <FeedbackForm onSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default App;

const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return (props) => {
    return <Component onClick={handleClick} {...props} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
}