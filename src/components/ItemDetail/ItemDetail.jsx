import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { useNotification } from '../Notification/Notification'

function ItemDetail ({id, nombre, precio, img, stock, descripcion }) {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { agregarProducto } = useContext(CartContext)
    const setNotification = useNotification()

    const añadirCarrito = (cant) => {
        precio = precio * cant

        console.log(`se agregaron ${cant} ${nombre}`)
        setNotification('success', `se agregaron ${cant} ${nombre}`)
        agregarProducto({id, nombre, precio, img, cant})
        setCantidadAgregada(cant)
    }

    return (
        <div className="producto__detalles">
            <div className="producto__detalles--grid">
                <div className="producto__detalles__imagen">
                    <img src={img} alt="" />
                </div>
                <h3 className="producto__detalles__nombre">{nombre}</h3>
                <h3 className="producto__detalles__precio">${precio}</h3>
                { cantidadAgregada === 0 
                    ?  <Counter inicio={1} stock={stock} agregar={añadirCarrito} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
                <h3 className="producto__detalles__descripcion">{descripcion}</h3>
            </div>
        </div>
    )
}

export default ItemDetail;