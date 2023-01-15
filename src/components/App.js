import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme,setTheme] = useState(true)

  const appClass = theme ? "App dark" : "App light"

 function handleTheme(){
  
 setTheme(theme=>!theme)  
 } 



  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>{theme ? "light mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
