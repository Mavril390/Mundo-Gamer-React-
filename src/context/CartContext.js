import { useState, createContext, useEffect } from "react";

const CartContext = createContext()

export function CartProvider ({ children }) {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setcantidadTotal] = useState(0)

    useEffect(() => {
        let cantidadTotal = 0
        carrito.forEach(prod => {
            cantidadTotal += prod.cant
        })
        setcantidadTotal(cantidadTotal)
    }, [carrito])

    const agregarProducto = (producto) => {
        if (!estaEnCarrito(producto.id)) {
            setCarrito([...carrito, producto])
        }
    }

    const eliminarProducto = (id) => {
        const carritoSinProducto = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoSinProducto)
    }

    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{
            carrito,
            cantidadTotal,
            agregarProducto,
            eliminarProducto,
            estaEnCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;

