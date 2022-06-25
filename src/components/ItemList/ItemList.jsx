import Item from "../Item/Item"
import { memo } from 'react'

function ItemList({productos}){
    return(
        <div>
            {
            productos.map(item =>
                <Item id={item.id} {...item} />
                )
            }
        </div>
    )
}

export default memo(ItemList);