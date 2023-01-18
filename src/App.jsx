import ItemList from "./components/ItemList"
import './App.css';

const fruitStore = [
  {name:"orange",
    price: 2.5},
  {name:"apple",
  price: 3.8},
  {name: "peach",
  price: 2.1},
  {name: "grapes",
  price: 4.2},
  {name: "mango",
  price: 6.7}
]

function App() {
  return (
    <div className="App">
      <h2>My fruit store</h2>
      <hr />
      <hr />
      <ItemList fruitStore={fruitStore} />
    </div>
  );
}

export default App;
