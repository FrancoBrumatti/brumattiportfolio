import React from 'react';

//styles
import { NavbarContainer, NavbarTitle, NavbarButtons, NavbarLink } from './navbarElements';

const Navbar = () => {
    return ( 
        <NavbarContainer>
            <NavbarTitle>
                <h1>Franco Brumatti</h1>
            </NavbarTitle>
            <NavbarButtons>
                <NavbarLink>Inicio</NavbarLink>
                <NavbarLink>Sobre Mi</NavbarLink>
                <NavbarLink>Skills</NavbarLink>
                <NavbarLink>Contacto</NavbarLink>
            </NavbarButtons>
        </NavbarContainer>
    );
}
 
export default Navbar;