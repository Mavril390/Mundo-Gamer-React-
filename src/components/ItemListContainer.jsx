import ItemList from "./ItemList";
import { useState, useEffect}  from "react"
import { getProducto } from '../ListaDeProductos'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        getProducto().then(response => {
            setProductos(response)
        })
    }, [])

    return(
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
                            <ItemList productos={productos}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ItemListContainer;