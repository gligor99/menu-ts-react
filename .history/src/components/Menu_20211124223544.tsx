type Props = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

const Menu: React.FC<Props> = () => {
    return (
        <div>
            Menu Component
        </div>
    )
}

export default Menu
