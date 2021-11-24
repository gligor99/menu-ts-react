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
          <article className="menu-item" key={item.id}>
            <img src={item.img} alt={item.title} />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
