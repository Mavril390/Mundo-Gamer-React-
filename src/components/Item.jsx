function Item({id, nombre, precio, img, alt}){
    return(
        <div>
            <div key={id}>
                <div className="producto__info--grid">
                    <div className="producto__img">
                        <img src={img} alt={alt} />
                    </div>
                    <p className="producto__info__nombre posicionInlineBlock">{nombre}</p>
                    <p className="producto__info__precio posicionInlineBlock">${precio}</p>
                    <a href="/#" className="btn--vinculo elementoCentrado producto__info__comprar">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default Item;