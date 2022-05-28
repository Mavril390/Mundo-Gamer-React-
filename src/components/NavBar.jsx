import CartWidget from "./CartWidget";

function NavBar() {
    return(
        <header class="header">
        <nav class="navbar navbar-expand-lg container sticky-top navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/#">Mundo Gamer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 header__navegacion__lista">
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#">Sobre nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#">Galeria</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header__navegacion__lista__elemento active" href="/#"> <CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;