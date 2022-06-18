import { useState } from "react"
import "./Counter.css"

function Contador ({inicio = 1, stock = 0, agregar}){

    const [cantidad, setCantidad] = useState(inicio)

    const sumarUno = () => {
        if (stock > cantidad){
            setCantidad(cantidad + 1)
        }
    }
    const restarUno = () => {
        if ( cantidad > 1 )
        setCantidad( cantidad - 1 )
    }

    return (
        <div className="counter">
            <div className="counter--grid">
                <button className="counter__sumarCarro" onClick={() => { agregar(cantidad) }}>Sumar al Carrito</button>
                <button className="counter__sumarProducto" onClick={sumarUno}> + </button>
                <p className="counter__numero">{cantidad}</p>
                <button className="counter__restarProducto" onClick={restarUno}> - </button>
            </div>
        </div>
    )
}

export default Contador;