import "./Item.css"
import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, img, alt }) {
    return (
        <div className="producto--grid">
            <div className="producto__img">
                <Link className="producto__detalles" to={`/detail/${id}`}>
                    <img src={img} alt={alt} />
                </Link>
            </div>
            <p className="producto__nombre posicionInlineBlock">
                <Link className="producto__detalles" to={`/detail/${id}`}>{nombre}</Link>
            </p>
            <p className="producto__precio posicionInlineBlock">${precio}</p>
            <Link className="producto__comprar btn--vinculo elementoCentrado" to={`/detail/${id}`}>Ver Detallas del producto</Link>
        </div>
    )
}

export default Item;