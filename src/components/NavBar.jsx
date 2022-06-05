import CartWidget from "./CartWidget";

function NavBar() {
    return(
        <header className="header">
        <nav className="navbar navbar-expand-lg container sticky-top navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Mundo Gamer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 header__navegacion__lista">
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#">Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header__navegacion__lista__elemento active" href="/#"> <CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;