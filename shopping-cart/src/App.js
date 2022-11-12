//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

let cart = [];

function Main() {

  class Food {
    constructor(name, num) {
      this.name = name;
      this.num = num;
    }
  }

  const foodItems = [
    "Milk",
    "Cookies", 
    "Oranges",
    "Bread",
    "Cereal",
    "Tofu"
  ]

  const [currentFood, setFood] = useState("Milk");
  const [currentList, setList] = useState([]);
  
  const changeItem = (newItem)=> {
      setFood(newItem.nativeEvent.target.value);
  }

  function dropdownList(list) {
    const listItems = list.map((item, i) => <option key = {i} value = {item}>{item}</option>);
    return listItems;
  }

 function outputList(list) {
    const listItems = list.map((item, i) => <li key = {i}>{item.name} x{item.num}</li>);
    return listItems;
  }

  let handleSubmit = (e) => {
    setFood(currentFood);
    let object = cart.find(element => element.name === currentFood);
    if (object && currentFood !== undefined) {
      object.num += 1
    } else if (!object && currentFood !== undefined) {
      let newObj = new Food(currentFood, 1);
      cart.push(newObj);
    }
    setList(cart);
    e.preventDefault();
    setFood(undefined)
  }

  return(
    <>
    <section className ="shopping-list">
      <form onSubmit={handleSubmit}>
        <label htmlFor="food-select">Products </label>
          <select id='food-select' value = {currentFood} onChange={changeItem}>
            {<>{dropdownList(foodItems)}</>}
          </select>
        <button type="submit">Add to Cart </button>
      </form>
    </section>
    <div className="cart-items">
      <h2>Things to buy: </h2>
      <ul>{currentList.length > 0 ? <><p>You have {currentList.length} item(s) in your cart</p>{outputList(currentList)}</> : <p>Add some items.</p>}</ul>
    </div>
    </>
  )

}


function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping cart</h1>
        <main>
            <>{Main()}</>
        </main>
      </header>
    </div>
  );
}

export default App;

