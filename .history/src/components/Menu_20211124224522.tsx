import { ItemsProps } from "../App"

type Props = {
    items: ItemsProps[];
}

const Menu: React.FC<Props> = ({items}) => {
    console.log(items);
    
    return (
        <div>
            {items.map((item) => {
              return  (
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              )
            })}
        </div>
    )
}

export default Menu
