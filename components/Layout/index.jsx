import React from 'react';

//animation
import Animation from '../ui/Animation';

//styles
import { LayoutContainer, LayoutContentContainer } from './layoutElements';

//components
import Navbar from '../Layout/Navbar';

const Layout = (props) => {
    return (
        <>
                <LayoutContainer>
                        <Animation direction={'vertical'}> 
                            <Navbar />
                        </Animation> 
                        <LayoutContentContainer>
                            {props.children}
                        </LayoutContentContainer>
                </LayoutContainer> 
        </>  
    );
}
 
export default Layout;