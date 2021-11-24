import { useState } from "react"
import Menu from "./components/Menu";
import items from './data'

export type ItemsProps = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

function App() {
  const [menuItems, setMenuItems] = useState<ItemsProps>(items)
  
  return (
    <div className="App">
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
