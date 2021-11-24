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

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
    </main>
  );
}

export default App;
