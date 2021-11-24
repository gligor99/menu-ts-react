import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data";

export type ItemsProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

function App() {
  const [menuItems, setMenuItems] = useState<ItemsProps[]>(items);

  return (
    <div className="App">
      <Categories items={menuItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
