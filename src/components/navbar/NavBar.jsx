import CartWidget from "../Cart/CartWidget";
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

function NavBar() {

    const navbar = ["Procesador", "Mother", "Ram", "Placa", <CartWidget />];

    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg container sticky-top navbar-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="/#">Mundo Gamer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 header__navegacion__lista">
                            {
                            navbar.map(item =>
                                <li className="nav-item">
                                    <NavLink to={`/category/${item}`} className="nav-link header__navegacion__lista__elemento" href="/#">{item}</NavLink>
                                </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;