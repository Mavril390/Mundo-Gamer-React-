import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

import { useContext }from 'react'
import CartContext from '../../context/CartContext'

import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

import { useNotification } from '../Notification/Notification'

import "./Checkout.css"

function Checkout() {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { carrito, getTotal, clearCart, cantidadTotal } = useContext(CartContext)

    const [cargando, setCargando] = useState(false)

    const setNotification = useNotification()

    const crearOrden = (data) =>{
        console.log("orden crada")
        const objOrder = {
            buyer: {
                name: data.nombre,
                email: data.correo,
                phone: data.telefono,
                address: data.direccion
            },
            items: carrito,
            total: getTotal()
        }

        console.log(objOrder)
        const batch = writeBatch(db)
        
        const ids = carrito.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'productos')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                setCargando(true)
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = carrito.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.cant

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0){
                    const collectionRef = collection(db, 'ordenes')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(( { id }) => {
                batch.commit()
                clearCart()
                setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
            }).catch(error => {
                if(error.type === 'out_of_stock'){
                    setNotification('error', "No hay stock")
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setCargando(false)
            })
    }

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "50px", height: "50px" }} animation="grow" variant="primary"></Spinner>
        )
    }

    return (
    <div className='checkout'>
        {cantidadTotal === 0
        ? <>
            <span className='checkout__title'>Gracias por su compra!</span>
            <Link to='/' className='link--inicio'>Volver al inicio</Link>
          </>
        : <>
            <span className='checkout__title'>Completa los siguientes campos para terminar tu compra!</span>
            <form className='checkout--form' onSubmit={handleSubmit(crearOrden)}>
                <span className='error'>*</span>: Campo requerido
                <div className='checkout--div'>
                    <label>Nombre <span className='error'>*</span></label>
                    <input className='checkout__input' placeholder='Nombre...' type="text" {...register('nombre', {
                        required: true
                    })}/>
                    {errors.nombre?.type === 'required' && <p className='error'>Nombre requerido</p>}
                </div>
                <div className='checkout--div'>
                    <label>Correo <span className='error'>*</span></label>
                    <input className='checkout__input' placeholder='Correo...' type="text" {...register('correo', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        required: true
                    })}/>
                    {errors.correo?.type === 'required' && <p className='error'>Correo requerido</p>}
                    {errors.correo?.type === 'pattern' && <p className='error'>El formato del correo es incorrecto</p>}
                </div>
                <div className='checkout--div'>
                    <label>Teléfono <span className='error'>*</span></label>
                    <input className='checkout__input' placeholder='Teléfono...' type="text" {...register('telefono', {
                        required: true,
                        minLength: 8,
                    })}/>
                    {errors.telefono?.type === 'required' && <p className='error'>Telefono requerido</p>}
                    {errors.telefono?.type === 'minLength' && <p className='error'>Telefono debe tener mas de 8 números</p>}
                </div>
                <div className='checkout--div'>
                    <label>Dirección <span className='error'>*</span></label>
                    <input className='checkout__input' placeholder='Dirección...' type="text" {...register('direccion', {
                        required: true,
                    })}/>
                    {errors.direccion?.type === 'required' && <p className='error'>Dirección requerido</p>}
                </div>
                <div className='checkout--submit'>
                    <input type="submit" value="Enviar" className='btn--vinculo'/>
                </div>
            </form>
        </>}
    </div>
    )
}

export default Checkout;