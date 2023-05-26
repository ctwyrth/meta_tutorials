import React from 'react';

function FruitsCounter(props) {
  const { fruits } = props;

  return (
    <h2>Total fruits: {fruits.length}</h2>
  )
}

export default FruitsCounter;