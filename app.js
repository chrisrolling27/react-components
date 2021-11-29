
var GroceryList = () => (
  <div> Groceries needed:
  <Olive_Oil />
  <Bacon />
  </div>
);

var Olive_Oil = () => (
  <div> Olive Oil here
  </div>
);


var Bacon = () => (
  <div> Bacon
  </div>
);



ReactDOM.render(<GroceryList />, document.getElementById("app"));
