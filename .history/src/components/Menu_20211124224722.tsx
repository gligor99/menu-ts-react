import { ItemsProps } from "../App";

type Props = {
  items: ItemsProps[];
};

const Menu: React.FC<Props> = ({ items }) => {
  console.log(items);

  return (
    <div className="section-center">
      {items.map((item) => {
        return (
          <div className="menu-item">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
