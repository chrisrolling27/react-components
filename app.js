
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Onion', 'Pepper', 'Bacon', 'Cheese']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carted: false
    };
  }

  onListItemClick() {
    this.setState({
      carted: !this.state.carted
    });
  }

  render() {

    var style = {
      textDecoration: this.state.carted ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
    );
  }
}




ReactDOM.render(<App />, document.getElementById("app"));
