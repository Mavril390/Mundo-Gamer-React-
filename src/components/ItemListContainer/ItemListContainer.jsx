import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react"
import { getProducto, getProductsByCategory } from '../../ListaDeProductos'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

function ItemListContainer() {

    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)

        if(!idCategoria) {
            getProducto().then(prods => {
                setProductos(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        } else {
            getProductsByCategory(idCategoria).then(prods => {
                setProductos(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        }
    }, [idCategoria])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "50px", height: "50px" }} animation="grow" variant="primary"></Spinner>
        )
    }

    return (
        <main>
            <section className="main__inicio">
                <div className="main__inicio--grid">
                    <h1 className="main__inicio__titulo animate__animated animate__backInLeft">Mundo Gamer</h1>
                    <h3 className="main__inicio__tituloSegundo animate__animated animate__backInRight">Todo lo que buscas para
                        tu PC!</h3>
                </div>
            </section>
            <section>
                <div className="main__contenido__productos container elementoCentrado">
                    <div className="producto">
                        <ItemList productos={productos} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ItemListContainer;