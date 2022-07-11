import { useContext }from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart(){

    const { carrito, eliminarProducto, clearCart, cantidadTotal, getTotal } = useContext(CartContext)
    
    return(
        <div>
            <h1 className='titulo'> Carrito </h1>
            {
                cantidadTotal !== 0
                    ?<div className='carrito'>
                        {carrito.map(item => 
                        <div className='carrito--grid'>
                            <img src={item.img} alt='' className='carrito__img'></img>
                            <div className='carrito__nombre'>
                                <p className='carrito--titulo'> <b>Producto</b> </p>
                                <p>{item.nombre}</p>
                            </div>
                            <div className='carrito__precio'>
                                <p className='carrito--titulo'> <b>Precio unitario</b> </p>
                                <p>${item.precio}</p>
                            </div>
                            <div className='carrito__cantidad'>
                                <p className='carrito--titulo'> <b>Cantidad</b> </p>
                                <p>{item.cant}</p>
                            </div>
                            <button onClick={() => {eliminarProducto(item.id)}} className='carrito__borrar'><b>X</b></button>
                        </div>
                        )}
                        <div className='carrito__detalles'>
                            <div className='carrito__detalles--position'>
                                <div className='carrito__detalles__txt'>
                                    Total <b>${getTotal()}</b>
                                </div>
                                <div className='carrito__detalles__button'>
                                    <button onClick={() => {clearCart()}} className='button__borrarTodo btn--vinculo'><b>Borrar Todo</b></button>
                                    <Link to={'/checkout'}> <button className='button__comprar btn--vinculo'><b>Crear Orden</b></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :<div className='sinProductos'>
                        <p>No hay ningun producto en el carrito</p>
                        <Link to='/'>Volver al inicio</Link>
                    </div>
            }
        </div>
    )
}

export default Cart;