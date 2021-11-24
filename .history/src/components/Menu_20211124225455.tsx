import { ItemsProps } from "../App";
import '../index.css'

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
            <div className="item-info">
                <header>
                    <h4 className="title">{item.title}</h4>
                    <h4 className="price">{item.price}</h4>
                </header>
                <p className="item-text">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
