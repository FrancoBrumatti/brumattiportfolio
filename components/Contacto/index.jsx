import React from 'react';
import Formulario from '../ui/Form';

//data
import { contactoData } from '../../data/contactoData';

//styles
import { ContactoForm, ContactoInfo, ContactoLayout, ContactoDato, ContactoRedes } from './contactoElements';

const Contacto = () => {
    return ( 
        <ContactoLayout>
            <ContactoInfo>
                {contactoData.contactoDatos.map(dato => 
                    <ContactoDato key={dato.id}>
                        <h1>{dato.title}</h1>
                        <p>{dato.icon} {dato.info}</p>  
                    </ContactoDato>  
                )}
                <ContactoRedes>
                    {contactoData.contactoRedes.map(red => 
                        <a href={red.href}>{red.icon}</a>
                    )}
                </ContactoRedes>    
            </ContactoInfo>
            <ContactoForm>
                <Formulario />
            </ContactoForm>
        </ContactoLayout>
    );
}
 
export default Contacto;