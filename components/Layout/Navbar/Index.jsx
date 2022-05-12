import React from 'react';

import { useRouter } from 'next/router';

//styles
import { NavbarContainer, NavbarTitle, NavbarButtons, NavbarLink } from './navbarElements';

const Navbar = () => {

    const router = useRouter();

    return ( 
        <NavbarContainer>
            <NavbarTitle>
                <h1>Franco Brumatti</h1>
            </NavbarTitle>
            <NavbarButtons>
                <NavbarLink onClick={() => router.push('/')}>Inicio</NavbarLink>
                <NavbarLink onClick={() => router.push('/sobremi')}>Sobre Mi</NavbarLink>
                <NavbarLink onClick={() => router.push('/skills')}>Skills</NavbarLink>
                <NavbarLink onClick={() => router.push('/contacto')}>Contacto</NavbarLink>
            </NavbarButtons>
        </NavbarContainer>
    );
}
 
export default Navbar;