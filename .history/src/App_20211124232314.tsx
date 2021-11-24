import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data";

let uniques = Array.from(new Set(items.map((item) => item.category))) ;
const allCategories = ['all', ...uniques]
console.log(allCategories);


export type ItemsProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

export type CategoriesProps = {
  categories: string;
}

function App() {
  const [menuItems, setMenuItems] = useState<ItemsProps[]>(items);
  const [categories, setCategories] = useState<CategoriesProps[]>(allCategories)

  return (
    <div className="App">
      <Categories categories={categories} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
