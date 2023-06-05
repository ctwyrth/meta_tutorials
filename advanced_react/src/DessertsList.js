function DessertsList(props) {
  const { data } = props;
  // const desserts = data.sort((a, b) => a.calories - b.calories);
  // const lowCalDesserts = desserts.filter(dessert => dessert.calories <= 500);

  const desserts = data.sort((a, b) => a.calories - b.calories)
    .filter(dessert => dessert.calories <= 500)
    .map((dessert) => { return (
      <li>{dessert.name} - {dessert.calories} cal</li>
    )});

  console.log(desserts);

  return (
    <div>
      <ul>
        {/* {lowCalDesserts.map(dessert => <li>{dessert.name} - {dessert.calories} cal</li>)} */}
        {desserts}
      </ul>
    </div>
  )
}

export default DessertsList;
