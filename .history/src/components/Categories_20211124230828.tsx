import React from 'react'
import { ItemsProps } from '../App'

type Props = {
    items: ItemsProps[]
}

const Categories: React.FC<Props> = ({items}) => {
    return (
        <div>
            {items.map((item) => {
                return <h1>{item.category}</h1>
            })}
        </div>
    )
}

export default Categories
