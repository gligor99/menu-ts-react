import { useState } from "react"
import Menu from "./components/Menu";

import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  console.log(menuItems);
  

  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
