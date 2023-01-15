import React,{ useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) { 
  const [newItems, setItems] = useState("All")

  function handleCategory(event){
    const category = event.target.value
    const newItems = items.filter(item=>item.category === category)
    setItems(newItems)
  }

  const item = newItems.map((item)=>(
    <Item key={item.id}id={item.id}name={item.name}category={item.category}/>
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {item}
      </ul>
    </div>
  );
}

export default ShoppingList;
