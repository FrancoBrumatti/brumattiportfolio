import styled from 'styled-components';

export const ContactoLayout = styled.div`
    display: grid;
    grid-template-rows: auto auto;

    height: 100%;
    padding: 2rem 0;

    @media (min-width: 1024px) {
        padding: 2rem;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
    }
`;

export const ContactoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    padding: 2rem 1rem;
    color: var(--white);

    @media (min-width: 1024px) {
        padding: 4rem;
    }
`;

export const ContactoRedes = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 3rem;
    align-self: center;

    a {
        color: var(--white);

        transition: all .3s;

        &:hover {
            color: var(--brighter);
        }
    }

    
`;

export const ContactoForm = styled.div`

`;

export const ContactoDato = styled.div`
    text-align: center;
    width: 100%;

    h1 {
        font-size: 1.2rem;
    }

    p {
        color: var(--brighter);
    }

    @media (min-width: 1024px) {
        text-align: start;
    }
`;