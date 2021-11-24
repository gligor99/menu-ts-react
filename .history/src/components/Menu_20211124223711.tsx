import { ItemsProps } from "../App"

type Props = {
    items: ItemsProps
}

const Menu: React.FC<Props> = ({items}) => {
    return (
        <div>
            Menu Component
        </div>
    )
}

export default Menu
