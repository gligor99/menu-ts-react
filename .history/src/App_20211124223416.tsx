import { useState } from "react"
import Menu from "./components/Menu";

import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  

  return (
    <div className="App">
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
