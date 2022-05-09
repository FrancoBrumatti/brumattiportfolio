import React from 'react';

//styles
import { LayoutContainer, LayoutContentContainer } from './layoutElements';

//components
import Navbar from '../Layout/Navbar';
import SvgBackground from '../SvgBackground';

const Layout = (props) => {
    return (
        <>
                <LayoutContainer>
                    {/* <SvgBackground /> */}
                    <Navbar />
                    <LayoutContentContainer>
                        {props.children}
                    </LayoutContentContainer>
                </LayoutContainer> 
        </>  
    );
}
 
export default Layout;