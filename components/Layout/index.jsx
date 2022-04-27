import React from 'react';

//styles
import { AppBackground, LayoutContainer, LayoutNavbarContainer, LayoutContentContainer } from './layoutElements';

//components
import Navbar from '../Navbar';
import SvgBackground from '../SvgBackground';

const Layout = (props) => {
    return (
        <>
            <SvgBackground />
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
        </>
            
    );
}
 
export default Layout;