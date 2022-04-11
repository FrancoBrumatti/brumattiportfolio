import React from 'react';

//styles
import { AppBackground, LayoutContainer, LayoutNavbarContainer, LayoutContentContainer } from './layoutElements';

//components
import Navbar from '../Navbar';

const Layout = (props) => {
    return (
        <AppBackground>
            <LayoutContainer>
                <LayoutNavbarContainer>
                    <Navbar />
                </LayoutNavbarContainer>
                <LayoutContentContainer>
                    {props.children}
                </LayoutContentContainer>
            </LayoutContainer> 
        </AppBackground>
    );
}
 
export default Layout;