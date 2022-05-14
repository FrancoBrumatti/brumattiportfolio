import React from 'react';

//styles
import { LayoutContainer, LayoutContentContainer } from './layoutElements';

//components
import Navbar from '../Layout/Navbar';

const Layout = (props) => {
    return (
        <>
                <LayoutContainer>
                    <Navbar />
                    <LayoutContentContainer>
                        {props.children}
                    </LayoutContentContainer>
                </LayoutContainer> 
        </>  
    );
}
 
export default Layout;