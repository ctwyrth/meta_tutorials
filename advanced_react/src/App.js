import React, { useState } from 'react';
import "./App.css";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({goal: "", by: ""});
  const changeHandler = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  const submitHandler = (e) => { 
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" id="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" id="by" placeholder="By" value={formData.by} onChange={changeHandler} />
        <button type="submit">Submit Goal</button>
      </form>
    </>
  )
}

const ListOfGoals = (props) => {
  // const [ allGoals ] = props.allGoals;
  console.log(typeof props.allGoals);

  return (
    <ul>
      {props.allGoals?.map((goal, idx) => (
        <li key={idx}>{goal.by}'s goal is to → {goal.goal}</li>
      ))}
    </ul>
  )
}

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const addGoal = (goal) => { setAllGoals([...allGoals, goal]); };

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
};
