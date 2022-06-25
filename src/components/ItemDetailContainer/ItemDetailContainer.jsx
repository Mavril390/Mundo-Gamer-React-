import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

import { db } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {

    const [producto, setProducto] = useState()
    const { id } = useParams()
    const [cargando, setCargando] = useState(true)
    
    useEffect(() => {
        setCargando(true)

        const docRef = doc(db, 'productos', id)

        getDoc(docRef).then(doc => {
            const productoFirebase = { id: doc.id, ...doc.data()}
            setProducto(productoFirebase)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [id])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "50px", height: "50px" }} animation="grow" variant="primary"></Spinner>
        )
    }


    return (
        <section className='infoProducto'>
            <div className='elementoCentrado'>
                <ItemDetail {...producto} />
            </div>
        </section>
    )
}

export default ItemDetailContainer