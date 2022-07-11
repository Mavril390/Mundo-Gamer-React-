import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { useContext }from 'react'
import CartContext from '../../context/CartContext'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {

    const navbar = ["Procesador", "Mother", "Ram", "Placa"];
    const { cantidadTotal } = useContext(CartContext)

    return(
        <>
        <Navbar bg="dark" variant="dark" className="navbar-dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home"><Link to='/' className="navbar__title">Mundo Gamer</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="justify-content-end">
                <Nav className="me-auto">
                    {
                        navbar.map(item =>
                        <Nav.Link><NavLink to={`/category/${item}`} className="nav-link header__navegacion__lista__elemento" href="/#">{item}</NavLink></Nav.Link>
                        )
                    }
                    {
                        cantidadTotal === 0
                        ? null
                        : <Nav.Link><NavLink to={`/cart`} className="nav-link header__navegacion__lista__elemento" href="/#"><CartWidget /></NavLink></Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;