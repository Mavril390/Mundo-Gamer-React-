import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { useNotification } from '../Notification/Notification'

function ItemDetail ({id, nombre, precio, img, stock, caracteristicas }) {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { agregarProducto } = useContext(CartContext)
    const setNotification = useNotification()

    const añadirCarrito = (cant) => {
        console.log(`se agregaron ${cant} ${nombre}`)
        setNotification('success', `Se agregaron ${cant} ${nombre}`)
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
                { 
                stock === 0
                ?  <div className="producto__detalles__stock">Stock disponible: <b>Sin stock</b></div>
                : cantidadAgregada === 0 
                    ?  <>
                        <Counter inicio={1} stock={stock} agregar={añadirCarrito} />
                        <div className="producto__detalles__stock">Stock disponible: <b>{stock}</b></div>
                       </>
                    :  <Link to='/cart'>Terminar compra</Link>
                }
                <div className="producto__detalles--add">
                    <p>Especificaciones</p>
                    <hr></hr>
                    <div className="detalles--add">
                        {Object.entries(caracteristicas).map(([key, value]) => {
                            return(
                            <div className="add">
                                <div className="add__key">
                                    <span className="add--key"> {key}</span>
                                </div>
                                <div className="add__value">
                                    <span className="add--value">{value}</span>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;