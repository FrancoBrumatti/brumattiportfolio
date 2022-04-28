import styled from 'styled-components';

export const AppBackground = styled.div`
    height: 90vh;
    width: 90vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--appBackground);
`;

export const LayoutContainer = styled.div`
    position: relative;
    height: 100%;

    display: flex;
    flex-direction:column ;
`;

export const LayoutNavbarContainer = styled.div`
    position: fixed;
    width: 100%;
`;

export const LayoutContentContainer = styled.div`
    height: 100%;
    padding: 6rem 2rem 4rem 2rem;
    overflow: auto;
    scroll-behavior: auto;

    ::-webkit-scrollbar {
        display: none;
    }

/*    
    ::-webkit-scrollbar-track {
        background: var(--primary);
        margin: 1rem 0;
    }

    
    ::-webkit-scrollbar-thumb {
        background: var(--brighter);
        border-radius: .5rem;
    }

     
    ::-webkit-scrollbar-thumb:hover {
        background: var(--white);
    } */
`;

