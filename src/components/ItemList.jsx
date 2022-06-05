import Item from "./Item"

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

export default ItemList;