import { useState, createContext, useEffect, useRef } from "react";
import { useNotification } from "../components/Notification/Notification";

const CartContext = createContext()

export function CartProvider ({ children }) {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setcantidadTotal] = useState(0)
    const setNotification = useNotification()

    const renderRef = useRef(0)

    useEffect(() => {
        const cartSaved = localStorage.getItem('carrito')
        const cartParsed = JSON.parse(cartSaved)

        setCarrito(cartParsed)
    }, [])

    useEffect(() => {
        if(renderRef.current > 0){
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        renderRef.current =+ 1
    }, [carrito])

    useEffect(() => {
        let cantidadTotal = 0
        carrito.forEach(prod => {
            cantidadTotal += prod.cant
        })
        setcantidadTotal(cantidadTotal)
    }, [carrito])

    const getTotal = () => {
        let total = 0
        carrito.forEach(prod => {
            total += prod.cant * prod.precio
        })
        return total
    }

    const agregarProducto = (producto) => {
        if (!estaEnCarrito(producto.id)) {
            setCarrito([...carrito, producto])
        }
        else{
            setNotification('error', 'El producto ya se encuentra en el carrito')
        }
    }

    const eliminarProducto = (id) => {
        const carritoSinProducto = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoSinProducto)
    }

    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{
            carrito,
            cantidadTotal,
            agregarProducto,
            eliminarProducto,
            estaEnCarrito,
            clearCart,
            getTotal,
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;

