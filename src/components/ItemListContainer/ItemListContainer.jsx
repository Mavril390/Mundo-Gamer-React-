import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react"
import { getProducto } from '../../ListaDeProductos'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

function ItemListContainer() {

    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        getProducto(2000).then(response => {
            if (idCategoria === undefined)
                setProductos(response)
            else {
                setProductos(response.filter(prod => prod.idCategoria === idCategoria))
            }
        }).finally(() => {
            setCargando(false)
        })
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
                    <div className="producto posicionInlineBlock">
                        <div className="producto__info">
                            <ItemList productos={productos} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ItemListContainer;