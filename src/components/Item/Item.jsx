import "./Item.css"
import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, img, alt }) {
    return (
        <div>
            <div>
                <div className="producto__info--grid">
                    <div className="producto__img">
                        <img src={img} alt={alt} />
                    </div>
                    <Link to={`/detail/${id}`}><p className="producto__info__nombre posicionInlineBlock">{nombre}</p></Link>
                    <p className="producto__info__precio posicionInlineBlock">${precio}</p>
                    <a href="/#" className="btn--vinculo elementoCentrado producto__info__comprar">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default Item;