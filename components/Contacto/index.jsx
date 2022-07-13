import React from 'react';

import Formulario from '../ui/Form';
import Animation from '../ui/Animation';

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
                            <Animation direction={'horizontal'}>
                                <h1>{dato.title}</h1>
                                <p>{dato.icon} {dato.info}</p> 
                            </Animation>
                        </ContactoDato>  
                    )}
                    <ContactoRedes>
                            {contactoData.contactoRedes.map(red => 
                                <Animation key={red.id} direction={'vertical'}>
                                    <a href={red.href}>{red.icon}</a>
                                </Animation>
                            )}  
                    </ContactoRedes>
            </ContactoInfo>
            <ContactoForm>
                <Animation direction={'vertical'}>
                    <Formulario />
                </Animation>
            </ContactoForm>
        </ContactoLayout>
    );
}
 
export default Contacto;