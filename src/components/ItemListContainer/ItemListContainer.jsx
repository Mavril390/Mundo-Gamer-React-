import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

import { getProducts } from '../../services/firebase/firestore'

import { useAsync } from '../../hooks/useAsync'

function ItemListContainer() {

    const { idCategoria } = useParams()
    const { productos, error, cargando } = useAsync(() => getProducts(idCategoria), [idCategoria])
    console.log(productos)

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "50px", height: "50px" }} animation="grow" variant="primary"></Spinner>
        )
    }

    if (error){
        return<h1>Hubo un error</h1>
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
                        {productos.length > 0
                            ? <ItemList productos={productos} />
                            : <h1>No hay productos.</h1>
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ItemListContainer;