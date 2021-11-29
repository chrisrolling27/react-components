
var GroceryList = () => (
  <div> Groceries needed:
  <GroceryListItem groceries={['Olive Oil', 'Bacon', 'Cheese']}/>
  </div>
);


var GroceryListItem = (props) => {


  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
  <div>
     <li onClick={onListItemClick}>{props.groceries[0]}</li>
     <li>{props.groceries[1]}</li>
     <li>{props.groceries[2]}</li>
  </div>
  );
  }



ReactDOM.render(<GroceryList />, document.getElementById("app"));
