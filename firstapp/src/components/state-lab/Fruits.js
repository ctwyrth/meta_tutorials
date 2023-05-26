import React from 'react';

function Fruits(props) {
  const { fruits } = props;

  return (
    <div>
      {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
    </div>
  )
}

export default Fruits;