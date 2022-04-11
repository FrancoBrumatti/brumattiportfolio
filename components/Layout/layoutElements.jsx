import styled from 'styled-components';

export const AppBackground = styled.div`
    height: 90vh;
    width: 90vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    background-color: var(--primary);
`;

export const LayoutContainer = styled.div`
    position: relative;
    height: 100%;

    display: flex;
    flex-direction:column ;
`;

export const LayoutNavbarContainer = styled.div`
    position: sticky;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    background-color: rgba(10, 47, 255, 0.4);
`;

export const LayoutContentContainer = styled.div`
    height: 100%;
    padding: 2rem;
`;

