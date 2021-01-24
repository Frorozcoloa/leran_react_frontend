import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';



class Header extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
        <>
        <div>
            <Navbar dark expand="md">
                    <NavbarBrand href="/">Fredy Orozco</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>

            <Jumbotron>
            <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Fredy Orozco</h1>
                                <p>
                                    Aquí se da solución al problema colocado, el usuario puede escoger como quiere hacer,
                                    si traer el valor de la base de datos o directamente ser calculado y devuelto.
                                </p>
                                <p>
                                    Los valores que son extraidos de la Base de Datos vendran cerrados en corchetes (Un array en JS)
                                    y los valores que no son extraidos se mostrarán en una lista
                                </p>

                                
                            </div>
                        </div>
                    </div>
            </Jumbotron>
        </div>
        </>
        )
    }
}

export default Header