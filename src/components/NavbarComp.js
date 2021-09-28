import React, {useState} from 'react'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap'

function NavbarComp() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h5>TimeClock</h5>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" className="m-2 p-1"> Logo </NavbarBrand>
                    <NavbarToggler onClick={() => {setIsOpen(!isOpen)}} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto p-2" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Signup</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        </div>
    )
}

export default NavbarComp
