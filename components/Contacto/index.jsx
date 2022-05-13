import React from 'react';
import Formulario from '../ui/Form';

import { ContactoForm, ContactoInfo, ContactoLayout, } from './contactoElements';

const Contacto = () => {
    return ( 
        <ContactoLayout>
            <ContactoInfo>
                
            </ContactoInfo>
            <ContactoForm>
                <Formulario />
            </ContactoForm>
        </ContactoLayout>
    );
}
 
export default Contacto;