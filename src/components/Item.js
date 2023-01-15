import React ,{ useState }from "react";

function Item({ name, category }) {
const [addItem,setAddItem ] = useState(false)

function handleAddItem(){
  setAddItem(addItem => !addItem)
}
  return (
    <li className={addItem ? "":"in-cart"} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem}className="add">{addItem ? "Remove From Cart":"Add to cart"}</button>
    </li>
  );
}

export default Item;
