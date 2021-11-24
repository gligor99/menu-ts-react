import { ItemsProps } from "../App"

type Props = {
    items: ItemsProps[]
}

const Menu: React.FC<Props> = ({items}) => {
    console.log(items);
    
    return (
        <div>
            Menu Component
        </div>
    )
}

export default Menu
