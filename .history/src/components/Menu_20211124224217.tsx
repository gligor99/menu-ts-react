import { ItemsProps } from "../App"

type Props = {
    items: ItemsProps[];
}

const Menu: React.FC<Props> = ({items}) => {
    console.log(items);
    
    return (
        items.map((item) => <h1>{item.title}</h1>)
    )
}

export default Menu
