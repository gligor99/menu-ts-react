import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data";

const uniques = Array.from(new Set(items.map((item) => item.category)));
const allCategories = ["all", ...uniques];

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
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (item: string) => {
    if (item === "all") {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item: string) => item.category === item);
      setMenuItems(newItems);
    }
  };

  return (
    <div className="App">
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
