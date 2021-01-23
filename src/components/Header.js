import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, NavLink} from 'reactstrap';



class Header extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
        <>
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">Fredy Orozco</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem><NavLink href="#">Home</NavLink></NavItem>
                    </Nav>
                </div>
            </Navbar>

            <Jumbotron>
            <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Fredy Orozco</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Quisquam, ipsum dignissimos nulla voluptates 
                                    placeat veritatis quos similique natus alias necessitatibus?

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