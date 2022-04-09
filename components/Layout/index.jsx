import React from 'react';

//styles
import { LayoutContainer } from './layoutElements';

const Layout = (props) => {
    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer> 
    );
}
 
export default Layout;