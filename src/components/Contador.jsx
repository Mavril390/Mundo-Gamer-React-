import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)
    const sumarCantidad = () => {
        setContador(contador + 1)
    }
    const restarCantidad = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <button >Añadir al Carrito</button>
            <button onClick={sumarCantidad}> + </button>
            <p>{contador}</p>
            <button onClick={restarCantidad}> - </button>
        </div>
    )
}

export default Contador;