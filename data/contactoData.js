import { FiUser, FiPhoneCall, FiMail, FiHome, FiBookOpen, FiLinkedin, FiGithub } from 'react-icons/fi';

export const contactoData = {
    "contactoTitle": "Contacto",
    "contactoDatos": [
        {
            "id": 0,
            "title": "Nombre Completo",
            "info": "Franco Brumatti",
            "icon": <FiUser />
        },
        {
            "id": 1,
            "title": "Número de Teléfono",
            "info": "+54 341 3 659 067",
            "icon": <FiPhoneCall />
        },
        {
            "id": 2,
            "title": "E-Mail",
            "info": "franco.brumatti@gmail.com",
            "icon": <FiMail />
        },
        {
            "id": 3,
            "title": "Residencia",
            "info": "Rosario, Santa Fe, Argentina",
            "icon": <FiHome />
        },
    ],
    "contactoRedes": [
        {
            "id": 0,
            "href": "https://www.linkedin.com/in/franco-brumatti/",
            "icon": <FiLinkedin />    
        },
        {
            "id": 1,
            "href": "https://github.com/FrancoBrumatti",
            "icon": <FiGithub />    
        }
    ]
}